declare enum FontSlant {
  Normal = 'Normal',
  Italic = 'Italic',
  Oblique = 'Oblique',
}

declare enum FontWeight {
  Thin = 'Thin',
  ExtraLight = 'ExtraLight',
  Light = 'Light',
  Normal = 'Normal',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
  ExtraBold = 'ExtraBold',
  Black = 'Black',
  ExtraBlack = 'ExtraBlack',
}

declare enum FontWidth {
  UltraCondensed = 'UltraCondensed',
  ExtraCondensed = 'ExtraCondensed ',
  Condensed = 'Condensed ',
  SemiCondensed = 'SemiCondensed ',
  Normal = 'Normal ',
  SemiExpanded = 'SemiExpanded',
  Expanded = 'Expanded',
  ExtraExpanded = 'ExtraExpanded',
  UltraExpanded = 'UltraExpanded',
}

declare enum BlendMode {
  // ------------
  Normal,
  // ------------
  Darken,
  Multiply,
  ColorBurn,
  // ------------
  Lighten,
  Screen,
  ColorDodge,
  // ------------
  Overlay,
  HardLight,
  SoftLight,
  // ------------
  Difference,
  Exclusion,
  // ------------
  Hue,
  Saturation,
  Color,
  Luminosity,
  // ------------
  PlusDarker,
  PlusLighter,
}

declare enum HorizontalAlign {
  Auto = 'auto',
  Left = 'left',
  Right = 'right',
  LeftAndRight = 'left&right',
}

declare enum VerticalAlign {
  Auto = 'auto',
  Top = 'top',
  Bottom = 'bottom',
  TopAndBottom = 'top&bottom',
}

declare enum BlurType {
  Gaussian,
  Motion,
  Zoom,
  Background,
}

declare enum GradientType {
  Linear,
  Radial,
  Angular,
}

declare enum FillType {
  SolidColor = 0,
  Gradient = 1,
  PatternFill = 4,
}

declare enum PatternFillType {
  Tile,
  Fill,
  Stretch,
  Fit,
}

declare enum BorderPosition {
  Center,
  Inside,
  Outside,
}

declare enum Arrowhead {
  None,
  LineArrow,
  TriangleArrow,
  LineSegment,
  CircleStroke,
  CircleFill,
  RectStroke,
  RectFill,
}

declare enum LineEnd {
  Butt,
  Round,
  Square,
}

declare enum LineJoin {
  Miter,
  Round,
  Bevel,
}

declare enum PointType {
  Straight = 1, // 笔直
  Mirrored = 2, // 对称
  Asymmetric = 3, // 不对称
  Disconnected = 4, // 分离
}

declare enum Alignment {
  Left,
  Right,
  Center,
  Justify,
}

declare enum VerticalAlignment {
  Top,
  Middle,
  Bottom,
}

declare enum TextTransform {
  Normal,
  LowerCase,
  UpCase,
}

declare enum DecorationStyle {
  None,
  Underline,
}

declare enum StrikeThroughStyle {
  None,
  StrikeThrough,
}

declare enum TextBehaviour {
  Width,
  Height,
  Both,
}

declare enum SmartLayout {
  LeftToRight,
  HorizontallyCenter,
  RightToLeft,
  TopToBottom,
  VerticallyCenter,
  BottomToTop,
}

declare enum ColorSpace {
  // default
  SRGB = 'sRGB',
  DISPLAY_P3 = 'displayP3',
  ADOBE_RGB = 'AdobeRGB',
}

declare enum AnimationType {
  None = -1,
  SlideFromLeft = 2,
  SlideFromRight = 0,
  SlideFromBottom = 1,
  SlideFromTop = 3,
}

// ==========资源库=================
declare enum ResourceType {
  Color = 'Color',
  LayerStyle = 'LayerStyle',
  TextStyle = 'TextStyle',
  Symbol = 'Symbol',
}
