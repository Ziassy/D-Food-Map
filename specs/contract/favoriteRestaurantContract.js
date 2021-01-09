const itActsAsFavoriteRestaurantModel = (favFoodmap) => {
  it('should return the restaurant that has been added', async () => {
    favFoodmap.putRestaurant({ id: 1 });
    favFoodmap.putRestaurant({ id: 2 });

    expect(await favFoodmap.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favFoodmap.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favFoodmap.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favFoodmap.putRestaurant({ aProperty: 'property' });

    expect(await favFoodmap.getAllRestaurant()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favFoodmap.putRestaurant({ id: 1 });
    favFoodmap.putRestaurant({ id: 2 });

    expect(await favFoodmap.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favFoodmap.putRestaurant({ id: 1 });
    favFoodmap.putRestaurant({ id: 2 });
    favFoodmap.putRestaurant({ id: 3 });

    await favFoodmap.deleteRestaurant(1);

    expect(await favFoodmap.getAllRestaurant()).toEqual([{ id: 2 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favFoodmap.putRestaurant({ id: 1 });
    favFoodmap.putRestaurant({ id: 2 });
    favFoodmap.putRestaurant({ id: 3 });

    await favFoodmap.deleteRestaurant(4);

    expect(await favFoodmap.getAllRestaurant()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestaurantModel };
