import React, { ReactNode, useState } from "react";
import { Pressable, GestureResponderEvent, View, Text } from "react-native";

type CustomizedButtonType = {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  buttonStyle?: any;
  textStyle?: any;
  onHoverStyle?: string;
};
const CustomizedButton = (props: CustomizedButtonType): ReactNode => {
  const [style, setStyle] = useState(props.buttonStyle);
  const originalColor = style.backgroundColor;

  const setNewColor = (newColor: string) => {
    const newState = { ...style };
    newState.backgroundColor = newColor;
        // console.log(style);

    setStyle(newState);
    // console.log(style);
  };
  const inHover = (e: any) => {
    if (props.onHoverStyle == null) return;
    setNewColor(props.onHoverStyle);
  };
  const outHover = (e: any) => {
    if (props.onHoverStyle == null) 
        return;
    setNewColor(originalColor);
  };
  return (
    <Pressable onPress={props.onPress} 
    onTouchStart={inHover}
    onTouchEnd={outHover}
    style={style}>
      <Text style={props.textStyle}>{props.title}</Text>
    </Pressable>
  );
};

export default CustomizedButton;
