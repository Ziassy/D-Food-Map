const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty Liked Restauran food map', ({ I }) => {
  I.seeElement('#restaurant');
  // Seems like no favorite restaurant here?
  I.see('You do not have any favorite Restaurant Here.', '#restaurant');
});

Scenario('Liking one of Foodmap Restaurant', async ({ I }) => {
  I.see('You do not have any favorite Restaurant Here.', '#restaurant');
  // Okay let's go to the page home
  I.amOnPage('/');
  // Oo.. found it!
  I.seeElement('.detail__grid a');
  // I have to choose one of those restaurant 
  const firstCardRestaurant = locate('.detail__grid a').first();
  const firstCardRestaurantTitle = await I.grabTextFrom(firstCardRestaurant);
  // let's move to page detail restaurant
  I.click(firstCardRestaurant);

  // Oh, here you are
  I.seeElement('#likeButton');
  // I click you as my favorite restaurant. now you are mine. 
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#restaurant');
  const likedFilmTitle = await I.grabTextFrom('.title');
  // Is this the same restaurant that I liked before ?
  assert.strictEqual(firstCardRestaurantTitle, likedFilmTitle);
})

Scenario('User Review', async ({ I }) => {
  // make sure no favorite restaurant here
  I.see('You do not have any favorite Restaurant Here.', '#restaurant');

  I.amOnPage('/');

  I.seeElement('.detail__grid a');
  // Click one of those restaurants
  const firstCard = locate('.detail__grid a').first();
  I.click(firstCard);
  // we see element form review
  I.seeElement('.form-review');

  const name = 'Pauziah';
  const review = 'Bagus, gak di ragukan lagi';
  // we fill form name and review
  I.fillField('#inputName', name);
  I.fillField('#inputReview', review);
  // and if you are done, click button review to send yours
  I.click('#reviewButton');
  const ThelastReview = locate('.reviewMessage').last();
  const textLastReview = await I.grabTextFrom(ThelastReview);
  //last, we can see our review
  assert.strictEqual(review, textLastReview);
});
