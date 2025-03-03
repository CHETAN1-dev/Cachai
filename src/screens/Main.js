import React from 'react';
import {ScrollView, View} from 'react-native';
import Header from '../components/element/Header/element/Header';
import BusinessInfo from '../components/element/BusinessBanner/element/BusinessInfo';
import BusinessDetails from '../components/element/BusinessDetail/BusinessDetails';
import OrderingOptions from '../components/element/OderingOption/OderingOption';
import ContactInformation from '../components/element/contact';
import Discount from '../components/element/Discount';
import ExtraDetails from '../components/ExtraDetail';
import NavBar from '../components/element/NavBar';
import { contacts } from '../components/molecule/contactData';
export default function Main() {
  return (
    <ScrollView>
      <View>
        <Header />
        <BusinessInfo />
        <BusinessDetails />
        <OrderingOptions />
        <ContactInformation contacts={contacts} />
        <Discount />
        <ExtraDetails />
        <NavBar/>
      </View>
    </ScrollView>
  );
}
