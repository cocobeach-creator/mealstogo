import React from "react";
import { List } from "react-native-paper";

export default function MenuList() {
  return (
    <List.Section>
      <List.Accordion
        title="Breakfast"
        left={(props) => <List.Icon {...props} icon="bread-slice" />}
      >
        <List.Item title="Eggs Benedict" />
        <List.Item title="Classic Breakfast" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        left={(props) => <List.Icon {...props} icon="hamburger" />}
      >
        <List.Item title="Burger w/ Fries" />
        <List.Item title="Steak Sandwich" />
        <List.Item title="Mushroom Soup" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        left={(props) => <List.Icon {...props} icon="food-variant" />}
      >
        <List.Item title="Spaghetti Bolognese" />
        <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
        <List.Item title="Steak Frites" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        left={(props) => <List.Icon {...props} icon="cup" />}
      >
        <List.Item title="Coffee" />
        <List.Item title="Tea" />
        <List.Item title="Modelo" />
        <List.Item title="Coke" />
        <List.Item title="Fanta" />
      </List.Accordion>
    </List.Section>
  );
}
