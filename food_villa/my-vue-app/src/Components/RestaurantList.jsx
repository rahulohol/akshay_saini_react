import React from 'react'
import RestaurantCard from './RestaurantCard';
import { restrautList } from '../data';


const RestaurantList = () => {
    return (
        <div className="restaurant-list">
          {restrautList.map((restaurant) => {
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
          })}
        </div>
      );
}

export default RestaurantList