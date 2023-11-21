import axios from 'axios';
import * as cheerio from 'cheerio';

const response = await axios.get(
	'https://shopee.com.my/search?keyword=peti%20ais'
);
const $ = cheerio.load(response.data);
const $contentContainer = $('div.col-xs-2-4 shopee-search-item-result__item');
console.log($contentContainer.contents);
