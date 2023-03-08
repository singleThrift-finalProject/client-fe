import { FormatRupiah } from '@arismun/format-rupiah';
import { TouchableOpacity, Image, View, Text } from 'react-native';

function ProductSellerCard({ product,navigation }) {
    const handleToDetails = (productId) => {
        // console.log(productId,`ini di dashboard`)
        navigation.navigate('ProductSellerDetailScreen', { id: productId })
    }
    return (
        <>
            <TouchableOpacity
                onPress={() => handleToDetails(product?.id)}
                className="flex w-[44%] overflow-hidden mr-[10] mb-[30]"
            >
                <Image
                    className="h-[160] w-full mb-[10] rounded-xl"
                    source={{
                        uri:product?.Images[0]?.imageUrl,
                    }}
                />
                <View className="flex gap-[5]">
                    <Text className="font-extrabold text-[14px]">
                        {product?.name}
                    </Text>
                    <View className="flex flex-row flex-wrap items-center">
                        <Text className="font-extrabold pr-[10] text-secondary text-[16px]">
                        <FormatRupiah value={product?.price}/>
                        </Text>
                        <Text className="text-xs text-[10px]">{product?.condition}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </>
    );
}

export default ProductSellerCard;
