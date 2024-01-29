import React from "react";
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import {PhotoProfile, Location, Notification, Search, Filter, Coffe, CoffeGreen, PhotoCoffe, FavoriteOFF, AddButton, FavoriteON} from '../../assets';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Top Menu */}
        <View style={styles.topMenu}>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={PhotoProfile} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.location}>
            <Image source={Location} />
            <Text style={styles.textLocation}>Cirebon, Jawa Barat</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Image source={Notification} />
          </TouchableOpacity>
        </View>

        {/* Welcome View */}
        <View style={styles.welcomeView}>
          <Text style={styles.welcomeText}>Good Morning, Inu</Text>
        </View>

        {/* Search */}
        <View style={styles.searchMenu}>
          <View style={styles.inputWrapper}>
            <Image source={Search} />
            <TextInput
              style={styles.textInput}
              placeholder="Search Coffee..."
            />
          </View>
          <View>
            <Image source={Filter} />
          </View>
        </View>

        {/* Categories */}
        <View style={styles.categoriesWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.textTitle}>Categories</Text>
          </View>
          {/* List Menu */}
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* Menu */}
            <TouchableOpacity activeOpacity={0.7} style={styles.menuActive}>
              <Image source={Coffe} />
              <Text style={styles.textMenuActive}>Cappucino</Text>
            </TouchableOpacity>

            {/* Menu */}
            <TouchableOpacity activeOpacity={0.7} style={styles.menuInActive}>
              <Image source={CoffeGreen} />
              <Text style={styles.textMenuInActive}>Coffee</Text>
            </TouchableOpacity>

            {/* Menu */}
            <TouchableOpacity activeOpacity={0.7} style={styles.menuInActive}>
              <Image source={CoffeGreen} />
              <Text style={styles.textMenuInActive}>Expresso</Text>
            </TouchableOpacity>

            {/* Menu */}
            <TouchableOpacity activeOpacity={0.7} style={styles.menuInActive}>
              <Image source={CoffeGreen} />
              <Text style={styles.textMenuInActive}>Cold Brew</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Product */}
        <View style={styles.productContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>

            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>

            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Special Offer */}
        <View style={styles.wrapperSpecialOffer}>
          <Text style={styles.textTitle}>Special Offer</Text>
          <View style={styles.flexRow}>
            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>

            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteON} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.flexRow}>
            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>

            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <Image source={PhotoCoffe} style={styles.imageProduct} />
              <View style={styles.wrapperTitle}>
                <View style={styles.margin}>
                  <Text style={styles.textTitleProduct}>Cappucino</Text>
                  <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteON} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <Text>Rp. 50.000</Text>
                <Image source={AddButton} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topMenu: {
    flexDirection: "row",
    marginTop: 30,
    marginHorizontal: 30,
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
  },
  textLocation: {
    fontWeight: "500",
    fontSize: 12,
    marginLeft: 5,
  },
  welcomeView: {
    marginHorizontal: 30,
    marginTop: 15,
  },
  welcomeText: {
    fontWeight: "500",
    fontSize: 14,
  },
  searchMenu: {
    flexDirection: "row",
    backgroundColor: "white",
    marginHorizontal: 30,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    marginLeft: 15,
  },
  categoriesWrapper: {
    marginLeft: 30,
    marginTop: 30,
  },
  titleWrapper: {
    marginBottom: 15,
  },
  textTitle: {
    fontWeight: "500",
  },
  menuActive: {
    backgroundColor: "#00582F",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 5,
  },
  menuInActive: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    elevation: 2,
    shadowColor: "black",
    marginHorizontal: 5,
  },
  textMenuActive: {
    color: "white",
    marginLeft: 5,
  },
  textMenuInActive: {
    color: "#00582F",
    marginLeft: 5,
  },
  productContainer: {
    marginLeft: 30,
    marginTop: 20,
  },
  imageProduct: {
    width: 144,
    height: 105,
    borderRadius: 20,
  },
  productWrapper: {
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    elevation: 5,
    shadowColor: "black",
    marginHorizontal: 5,
    marginVertical: 10,
  },
  wrapperTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textTitleProduct: {
    fontSize: 14,
    fontWeight: "500",
  },
  textSubTitleProduct: {
    fontSize: 10,
    marginTop: 5,
  },
  wrapperPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  margin: {
    marginTop: 10,
  },
  wrapperSpecialOffer: {
    marginTop: 20,
    marginLeft: 30,
  },
  flexRow: {
    flexDirection: 'row',
  },
});
