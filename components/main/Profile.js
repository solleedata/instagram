import React, { useState } from 'react'
import { View, Text, Image, FlatList, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

function Profile(props) {
    const [userPost, setUserPosts] = userState([])
    const [user, setUser] = useState(null)

    useEffect(() => {

    })

    const { currentUser, posts } = props
    console.log({ currentUser, posts })
    return (
        <View styles={styles.container}>
            <View styles={styles.containerInfo}>
                <Text>{currentUser.name}</Text>
                <Text>{currentUser.email}</Text>
            </View>
            <View styles={styles.containerGallery}>
                <FlatList
                    numColumns={3}
                    horizontal={false}
                    data={posts}
                    renderItem={({ item }) => (
                        <Image styles={styles.image}
                            source={{ uri: item.downloadURL }}
                        />

                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
    },
    containerInfo: {
        margin: 20,
    },
    containerGallery: {
        flex: 1 / 3,
    },
    image: {
        flex: 1,
        aspectRatio: 1 / 1,
    }
})
const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser,
    posts: store.userState.posts
})

export default connect(mapStateToProps, null)(Profile)
