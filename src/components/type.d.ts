type Ratio =
  | '1x1'
  | '4x3'
  | '16x9'
  | '644x323'
  | '450x248'
  | '546x618'
  | '547x365'
  | '257x125'
  | '274x175'
  | '167x42'
  | '740x414'
  | '652x367'
  | '668x445'
  | '762x470'
  | '551x335'
  | '1366x768'
  | '335x261'
  | '1366x450'
  | '354x222'
  | '1366x568'
  | '840x521'
  | '1126x617'
  | '676x430'
  | '451x273'
  | 'logo-novaworld';

type FontWeightStyle =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900';

type LetterSpacing = 's001' | 's005' | 's00015';

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'left'
  | 'right';

type ColorStyle =
  | 'white'
  | 'black'
  | 'cyanCobaltBlue'
  | 'dimGray'
  | 'stormcloud'
  | 'androidGreen1'
  | 'green'
  | 'platinum1'
  | 'gunMetal';

type FontFamilyStyle = 'fontICiel' | 'fontPlayfair';

type GeneralTextStyle =
  | ColorStyle
  | FontWeightStyle
  | TextStyle
  | LetterSpacing
  | FontFamilyStyle;
