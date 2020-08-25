/* eslint-disable no-restricted-syntax */
/* eslint-disable no-continue */
import React, { useState, useEffect } from 'react';
import {
  View, Text
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';
import axios from 'axios';
import parser from 'fast-html-parser';

export default function test() {
  const [scrapedRecipes, setScrapedRecipes] = useState({});
  async function readClipboardAndFetch() {
    const clipboardText = await Clipboard.getString();
    if (isValidUrl(clipboardText)) {
      getRecipeData(clipboardText)
        .then((recipe) => {
          setScrapedRecipes(recipe);
        }).catch((err) => {
          console.log(`Hmm: ${err}`);
        });
    } else {
      setScrapedRecipes({ err: 'Invalid url' });
    }
  }
  readClipboardAndFetch();

  return (
    <View>
      <Text>{JSON.stringify(scrapedRecipes)}</Text>
    </View>
  );
}

function getRecipeData(source) {
  return axios.get(source).then((resp) => {
    const html = resp.data;
    const dom = parser.parse(html, { script: true });

    const lds = dom.querySelectorAll(
      'script'
    );

    for (const ld of lds) {
      if (ld.rawAttrs !== 'type="application/ld+json"') {
        continue;
      }
      const json = JSON.parse(ld.text);

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
  }).catch((reason) => {
    console.log(`Wasn't able to get page source: ${reason}`);
    return false;
  });
}

function isValidUrl(string) {
  try {
    new URL(string);
  } catch (_) {
    return false;
  }

  return true;
}

function testScrapeFunction() {
  const testUrls = [
    'https://www.foodnetwork.com/recipes/food-network-kitchen/the-best-chicken-and-rice-8133711',
    'https://sallysbakingaddiction.com/quiche-recipe/',
    'https://panlasangpinoy.com/leche-flan/',
    'https://www.delish.com/cooking/recipe-ideas/a25648042/crustless-quiche-recipe/',
    'https://food52.com/recipes/81867-best-quiche-recipe'
  ];

  axios
    .get(testUrls[0])
    .then((resp) => {
      const parsedRecipe = getRecipeData(resp.data);
      if (!parsedRecipe) {
        console.log(`\n\nErrored on url ${testUrls[0]}\n\n`);
      } else {
        console.log(JSON.stringify(parsedRecipe, null, 2));
      }
    })
    .catch((err) => {
      console.log(`Errored for url: ${testUrls[0]}\n${err}`);
    });
}
