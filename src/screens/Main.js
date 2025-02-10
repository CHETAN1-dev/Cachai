import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/organism/Header';
import BusinessInfo from '../components/organism/BusinessInfo';
import BusinessDetails from '../components/BusinessDetails';
import OrderingOptions from '../components/organism/OderingOption';
import ContactInformation from '../components/contact';
import Discount from '../components/Discount';
import ExtraDetails from '../components/ExtraDetail';
import NavBar from '../components/organism/NavBar';
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
