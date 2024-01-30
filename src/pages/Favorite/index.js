import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AddButton, FavoriteOFF, FavoriteON, PhotoCoffe } from '../../assets';

const Favorite = () => {
  return (
    <View style={styles.containerFav}>
      <ScrollView>
        <View style={styles.wrapperSpecialOffer}>
          <Text style={styles.textTitle}>Favorite</Text>
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
                  <Text style={styles.textTitleProduct}>Sweet Coffee</Text>
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
                  <Text style={styles.textTitleProduct}>Mochachino</Text>
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
                  <Text style={styles.textTitleProduct}>Caramel Latte</Text>
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
                  <Text style={styles.textTitleProduct}>Caramel Machiato</Text>
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
                  <Text style={styles.textTitleProduct}>Coffee Latte</Text>
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
                  <Text style={styles.textTitleProduct}>Vietnam Drip</Text>
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
                  <Text style={styles.textTitleProduct}>Black Coffee</Text>
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
}

export default Favorite

const styles = StyleSheet.create({
  containerFav: {
    flex: 1,
    marginTop: 30,
  },
  wrapperSpecialOffer: {
    marginTop: 20,
    marginLeft: 30,
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
});