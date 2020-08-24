/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
import React, { useState } from 'react';
import {
  View, Text
} from 'react-native';
import axios from 'axios';
import { JSDOM } from 'jsdom';

export default function test() {
  const [scrapedRecipes, setScrapedRecipes] = useState([]);
  scrape();
  return (
    <View>
      <Text>Hey There</Text>
    </View>
  );
}

function scrape() {
  function getRecipeData(html) {
    const dom = new JSDOM(html);

    const lds = dom.window.document.querySelectorAll(
      'script[type="application/ld+json"]'
    );

    for (const ld of lds) {
      const json = JSON.parse(ld.innerHTML);

      if (Array.isArray(json)) {
        if (json.length < 1) {
          console.log('No schemas found');
          continue;
        }

        for (let i = 0; i < json.length; i += 1) {
          if (json[i]['@type'] === 'Recipe') {
            return json[i];
          }
        }

        console.log('No recipe schema found');
        return false;
      }
      if (json['@type'] === 'Recipe') {
        return json;
      }
      if (json['@graph']) {
        for (const schema of json['@graph']) {
          if (schema['@type'] === 'Recipe') {
            return schema;
          }
        }
        console.log('No more schemas to check in @graph, no recipes found');
      }
    }

    return false;
  }

  const testUrls = [
    'https://www.foodnetwork.com/recipes/food-network-kitchen/the-best-chicken-and-rice-8133711',
    'https://sallysbakingaddiction.com/quiche-recipe/',
    'https://panlasangpinoy.com/leche-flan/',
    'https://www.delish.com/cooking/recipe-ideas/a25648042/crustless-quiche-recipe/',
    'https://food52.com/recipes/81867-best-quiche-recipe'
  ];

  for (let i = 0; i < testUrls.length; i += 1) {
    axios
      .get(testUrls[i])
      .then((resp) => {
        const parsedRecipe = getRecipeData(resp.data);
        if (!parsedRecipe) {
          console.log(`\n\nErrored on url ${testUrls[i]}\n${resp.data}\n\n`);
        } else {
          console.log(parsedRecipe);
        }
      })
      .catch((err) => {
        console.log(`Errored for url: ${testUrls[i]}\n${err}`);
      });
  }
}
