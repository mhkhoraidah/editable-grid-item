import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Center,
  FlatList,
  IconButton,
  Stack,
  Switch,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Grid = () => {
  const [data, setData] = useState([
    {},
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      index: 2,
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e3254229d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "28694a0f-3da53451-471f-bd96-1424546536e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "28694a0f-3da1-471f-bd96-1423453254553456e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "283452345694a5460f-3da1-471f-bd96-142456e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "28694a0f-3da1-471f345353-bd96-1454632456e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "28694a0f-3da1-43345453271f-bd96-142456e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {
      id: "28694a0f-3da1-471f-bd94354562456-142456e29d72",
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);

  const [isEditEnable, setIsEditEnable] = useState(false);

  const isItem = (item: any): boolean => {
    return "id" in item;
  };

  const addItem = (index: number) => {
    const addIndex = index;
    const updatedData = [...data];
    updatedData[addIndex] = {
      id: "28694a0f65756" + index,
      avatarUrl:
        "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/object_cube.png",
    };
    setData(updatedData);
  };

  const removeItem = (index: number) => {
    const removeIndex = index;
    const updatedData = [...data];
    updatedData[removeIndex] = {};
    setData(updatedData);
  };

  const renderItem = (item: any, index: number) => {
    return (
      <Box
        _dark={{
          borderColor: "muted.50",
        }}
        p="4"
      >
        {isEditEnable && !isItem(item) ? (
          <VStack size={"2xl"} borderWidth="1" alignItems="center">
            <IconButton
              onPress={() => addItem(index)}
              size={"170px"}
              _icon={{
                as: Ionicons,
                name: "add",
                size: "6xl",
              }}
            />
          </VStack>
        ) : (
          <></>
        )}

        {isEditEnable && isItem(item) ? (
          <Center>
            <Stack space={4} borderWidth="1" justifyContent="space-between">
              <Avatar
                size={"170px"}
                source={{
                  uri: item.avatarUrl,
                }}
              />
            </Stack>
            <Button
              position={"absolute"}
              bottom={0}
              w="100%"
              onPress={() => removeItem(index)}
            >
              remove
            </Button>
          </Center>
        ) : (
          <></>
        )}

        {!isEditEnable && !isItem(item) ? (
          <VStack space={4} borderWidth="1" justifyContent="space-between">
            <Box size={"170px"} />
          </VStack>
        ) : (
          <></>
        )}
        {!isEditEnable && isItem(item) ? (
          <VStack space={4} borderWidth="1" justifyContent="space-between">
            <Avatar
              size={"170px"}
              source={{
                uri: item.avatarUrl,
              }}
            />
          </VStack>
        ) : (
          <></>
        )}
      </Box>
    );
  };

  return (
    <Box safeArea>
      <FlatList
        data={data}
        numColumns={4}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => item.id || "index" + index}
      />
      <Center>
        <Switch onChange={() => setIsEditEnable(!isEditEnable)} size={"lg"} />
      </Center>
    </Box>
  );
};

export default Grid;
