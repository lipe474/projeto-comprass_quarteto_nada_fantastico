import BigBanner from "@components/BigBanner"
import { ProductList } from "@components/ProductList"
import { View } from "react-native"

export function Home(){
    return(
        <View>
            <BigBanner showSearch={false} showModal={false} />
            <ProductList />
        </View>
    )
}