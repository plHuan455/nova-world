type Ratio =
  | '1x1'
  | '4x3'
  | '16x9'
  | '644x323'
  | '450x248'
  | '546x618'
  | '257x125'
  | '167x42'
  | '762x470'
  | '551x335'
  | '1366x768'
  | '335x261'
  | '1366x450'
  | '354x222'
  | '1366x568'
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
  | 'green';

type FontFamilyStyle = 'fontICiel';

type GeneralTextStyle =
  | ColorStyle
  | FontWeightStyle
  | TextStyle
  | LetterSpacing
  | FontFamilyStyle;
