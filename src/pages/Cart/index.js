import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AddButton, FavoriteOFF, FavoriteON, PhotoCoffe } from "../../assets";
import { FontAwesome5 } from "@expo/vector-icons";

const Cart = () => {
  return (
    <View style={styles.containerFav}>
      <ScrollView>
        <View style={styles.wrapperSpecialOffer}>
          <Text style={styles.textTitle}>Cart</Text>
          <View>
            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <View style={[styles.flexRow, styles.productCart]}>
                <View style={styles.flexRow}>
                  <Image source={PhotoCoffe} style={styles.imageProduct} />
                  <View style={styles.margin}>
                    <Text style={styles.textTitleProduct}>Cappucino</Text>
                    <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                    <Text style={styles.textPrice}>Rp. 50.000</Text>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <View>
                  <Text style={styles.textDetail}>
                    Cap Size: <Text style={styles.fontWeight}>Small</Text>
                  </Text>
                  <Text style={styles.textDetail}>
                    Level Sugar: <Text style={styles.fontWeight}>No Sugar</Text>
                  </Text>
                </View>
                <View style={[styles.flexRow, styles.alignCenter]}>
                  <Text style={styles.textQty}>2</Text>
                  <TouchableOpacity TouchableOpacity={0.7}>
                    <Image source={AddButton} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            {/* item Product */}
            <TouchableOpacity activeOpacity={0.7} style={styles.productWrapper}>
              <View style={[styles.flexRow, styles.productCart]}>
                <View style={styles.flexRow}>
                  <Image source={PhotoCoffe} style={styles.imageProduct} />
                  <View style={styles.margin}>
                    <Text style={styles.textTitleProduct}>Coffee</Text>
                    <Text style={styles.textSubTitleProduct}>With Sugar</Text>
                    <Text style={styles.textPrice}>Rp. 50.000</Text>
                  </View>
                </View>
                <TouchableOpacity activeOpacity={0.7} style={styles.margin}>
                  <Image source={FavoriteOFF} />
                </TouchableOpacity>
              </View>
              <View style={styles.wrapperPrice}>
                <View>
                  <Text style={styles.textDetail}>
                    Cap Size: <Text style={styles.fontWeight}>Small</Text>
                  </Text>
                  <Text style={styles.textDetail}>
                    Level Sugar: <Text style={styles.fontWeight}>No Sugar</Text>
                  </Text>
                </View>
                <View style={[styles.flexRow, styles.alignCenter]}>
                  <Text style={styles.textQty}>2</Text>
                  <TouchableOpacity TouchableOpacity={0.7}>
                    <Image source={AddButton} />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          </View>

          {/* Total */}
          <View>
            <View style={[styles.wrapperTotal, { marginTop: 15 }]}>
              <Text>Subtotal</Text>
              <Text>Rp.100.000</Text>
            </View>
            <View style={[styles.wrapperTotal, { marginTop: 5 }]}>
              <Text>Discount</Text>
              <Text>Rp.25.000</Text>
            </View>
            <View style={[styles.wrapperTotal, { marginTop: 30 }]}>
              <Text>Total</Text>
              <Text>Rp.75.000</Text>
            </View>
          </View>

          {/* Payment */}
          <View style={{ marginTop: 25 }}>
            <Text>Payment</Text>
            <View style={[styles.flexRow, { marginTop: 10 }]}>
              <TouchableOpacity>
                <FontAwesome5 name="cc-visa" size={40} color="black" />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5
                  name="cc-mastercard"
                  size={40}
                  color="black"
                  style={{ marginHorizontal: 10 }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <FontAwesome5 name="cc-paypal" size={40} color="black" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Button Pay */}
          <TouchableOpacity style={styles.buttonBuy}>
            <Text style={styles.textBuy}>Buy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  containerFav: {
    flex: 1,
    marginTop: 30,
  },
  wrapperSpecialOffer: {
    marginTop: 20,
    marginHorizontal: 30,
  },
  textTitle: {
    fontWeight: "500",
  },
  flexRow: {
    flexDirection: "row",
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
  imageProduct: {
    width: 144,
    height: 105,
    borderRadius: 20,
  },
  wrapperTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  margin: {
    marginTop: 10,
    marginLeft: 10,
  },
  textTitleProduct: {
    fontSize: 14,
    fontWeight: "500",
  },
  textSubTitleProduct: {
    fontSize: 10,
    marginTop: 5,
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "500",
  },
  wrapperPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
    marginHorizontal: 5,
  },
  productCart: {
    justifyContent: "space-between",
  },
  textDetail: {
    color: "#686868",
    fontSize: 12,
  },
  fontWeight: {
    fontWeight: "500",
    color: "black",
  },
  alignCenter: {
    alignItems: "center",
  },
  textQty: {
    fontSize: 32,
    fontWeight: "500",
    marginRight: 10,
  },
  wrapperTotal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonBuy: {
    backgroundColor: "#00512C",
    paddingVertical: 5,
    alignItems: 'center',
    borderRadius: 30,
    marginTop: 10,
  },
  textBuy: {
    fontSize: 20,
    color: 'white',
    fontWeight: '500',
  },
});
