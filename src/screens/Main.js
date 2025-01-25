import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import BusinessInfo from '../components/BusinessInfo';
import BusinessDetails from '../components/BusinessDetails';
import OrderingOptions from '../components/oderOption';
import ContactInformation from '../components/contact';
import Discount from '../components/Discount';
import ExtraDetails from '../components/ExtraDetail';
import NavBar from '../components/NavBar';
export default function Main() {
  return (
    <ScrollView>
      <View>
        <Header />
        <BusinessInfo />
        <BusinessDetails />
        <OrderingOptions />
        <ContactInformation />
        <Discount />
        <ExtraDetails />
        <NavBar/>
      </View>
    </ScrollView>
  );
}
