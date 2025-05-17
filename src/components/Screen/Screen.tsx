import {useScrollToTop} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  LayoutChangeEvent,
  Platform,
  RefreshControlProps,
  ScrollView,
  ScrollViewProps,
  StatusBar,
  StatusBarProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native';
import { ExtendedEdge, useSafeAreaInsetsStyle } from '../../utils';
import { useColors } from '../../hooks';

interface BaseScreenProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  safeAreaEdges?: ExtendedEdge[];
  backgroundColor?: string;
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
  keyboardOffset?: number;
  StatusBarProps?: StatusBarProps;
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  loading?: boolean;
  statusBarColor?: string;
  translucent?: boolean;
  loadingState?: string;
  _onPressLoadingContinue?: () => void;
  heading?: string;
  subTitle?: string;
  refreshControl?: RefreshControlProps;
  bounces?: boolean;
}

interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}
interface ScrollScreenProps extends BaseScreenProps {
  preset?: 'scroll';
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  ScrollViewProps?: ScrollViewProps;
  showsHorizontalScrollIndicator?: boolean;
  showsVerticalScrollIndicator?: boolean;
  refreshControl?: RefreshControlProps | any;
  bounces?: boolean;
}

interface AutoScreenProps extends Omit<ScrollScreenProps, 'preset'> {
  preset?: 'auto';
  scrollEnabledToggleThreshold?: {percent?: number; point?: number};
}

export type ScreenProps =
  | ScrollScreenProps
  | FixedScreenProps
  | AutoScreenProps;

const isIos = Platform.OS === 'ios';

function isNonScrolling(preset?: ScreenProps['preset']) {
  return !preset || preset === 'fixed';
}

function useAutoPreset(props: AutoScreenProps) {
  const {preset, scrollEnabledToggleThreshold} = props;
  const {percent = 0.1, point = 0} = scrollEnabledToggleThreshold || {};

  const scrollViewHeight = useRef(0);
  const scrollViewContentHeight = useRef(0);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  function updateScrollState() {
    if (
      scrollViewHeight.current === null ||
      scrollViewContentHeight.current === null
    )
      return;
    const contentFitsScreen = (function () {
      if (point) {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current - point
        );
      } else {
        return (
          scrollViewContentHeight.current < scrollViewHeight.current * percent
        );
      }
    })();

    // content is less than the size of the screen, so we can disable scrolling
    if (scrollEnabled && contentFitsScreen) setScrollEnabled(false);

    // content is greater than the size of the screen, so let's enable scrolling
    if (!scrollEnabled && !contentFitsScreen) setScrollEnabled(true);
  }

  function onContentSizeChange(w: number, h: number) {
    // update scroll-view content height
    scrollViewContentHeight.current = h;
    updateScrollState();
  }

  function onLayout(e: LayoutChangeEvent) {
    const {height} = e.nativeEvent.layout;
    // update scroll-view  height
    scrollViewHeight.current = height;
    updateScrollState();
  }

  // update scroll state on every render
  if (preset === 'auto') updateScrollState();

  return {
    scrollEnabled: preset === 'auto' ? scrollEnabled : true,
    onContentSizeChange,
    onLayout,
  };
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const {style, contentContainerStyle, children} = props;
  return (
    <View style={[$outerStyle, style]}>
      <View style={[$innerStyle, contentContainerStyle]}>{children}</View>
    </View>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const {
    children,
    keyboardShouldPersistTaps = 'handled',
    contentContainerStyle,
    ScrollViewProps,
    style,
    showsVerticalScrollIndicator = false,
    showsHorizontalScrollIndicator = false,
    refreshControl,
    bounces,
  } = props as ScrollScreenProps;

  const ref = useRef<ScrollView | null>(null);

  const {scrollEnabled, onContentSizeChange, onLayout} = useAutoPreset(
    props as AutoScreenProps,
  );

  // Add native behavior of pressing the active tab to scroll to the top of the content
  // More info at: https://reactnavigation.org/docs/use-scroll-to-top/
  useScrollToTop(ref);

  return (
    <ScrollView
      {...{keyboardShouldPersistTaps, scrollEnabled}}
      {...ScrollViewProps}
      ref={ref}
      bounces={bounces ?? false}
      showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
      showsVerticalScrollIndicator={showsVerticalScrollIndicator}
      onLayout={e => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      refreshControl={refreshControl}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      style={[$outerStyle, ScrollViewProps?.style, style]}
      contentContainerStyle={[
        $innerStyle,
        ScrollViewProps?.contentContainerStyle,
        contentContainerStyle,
      ]}>
      {children}
    </ScrollView>
  );
}

export function Screen(props: ScreenProps) {
  const {
    backgroundColor,
    KeyboardAvoidingViewProps,
    keyboardOffset = 0,
    safeAreaEdges,
    StatusBarProps,
    statusBarStyle = 'dark-content',
    loading = false,
    statusBarColor,
    translucent = false,
    bounces = false,
    heading,
    subTitle,
    loadingState,
    _onPressLoadingContinue,
  } = props;
  const Color = useColors();
  const $containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <View style={[$containerStyle, {backgroundColor}, $containerInsets]}>
      <StatusBar
        barStyle={statusBarStyle}
        translucent={translucent ?? true}
        {...StatusBarProps}
        backgroundColor={statusBarColor ?? Color.STATUS_BAR_COLOR}
      />
      <KeyboardAvoidingView
        behavior={isIos ? 'padding' : undefined}
        keyboardVerticalOffset={keyboardOffset}
        {...KeyboardAvoidingViewProps}
        style={[
          $keyboardAvoidingViewStyle,
          KeyboardAvoidingViewProps?.style,
          {backgroundColor: Color.WHITE},
        ]}>
        {isNonScrolling(props.preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
        {loading ? (
          <></>
          // <LoaderView
          //   loadingState={loadingState}
          //   heading={heading}
          //   subTitle={subTitle}
          //   _onPressContinue={_onPressLoadingContinue}
          // />
        ) : null}
      </KeyboardAvoidingView>
    </View>
  );
}

const $containerStyle: ViewStyle = {
  flex: 1,
};

const $keyboardAvoidingViewStyle: ViewStyle = {
  flex: 1,
};

const $outerStyle: ViewStyle = {
  flex: 1,
};

const $innerStyle: ViewStyle = {
  justifyContent: 'flex-start',
  alignItems: 'stretch',
};
