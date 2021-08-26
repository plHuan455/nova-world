type Ratio =
  | '1x1'
  | '4x3'
  | '16x9'
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

type TextStyle =
  | 'uppercase'
  | 'capitalize'
  | 'underline'
  | 'italic'
  | 'center'
  | 'justify'
  | 'left'
  | 'right';

type ColorStyle = 'white' | 'black';

type FontFamilyStyle = 'fontICiel';

type GeneralTextStyle =
  | ColorStyle
  | FontWeightStyle
  | TextStyle
  | LetterSpacing
  | FontFamilyStyle;
