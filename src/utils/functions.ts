import { StaticSlug } from 'services/menus/types';

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function mapModifiers(
  baseClassName: string,
  ...modifiers: (string | string[] | false | undefined)[]
): string {
  return modifiers
    .reduce<string[]>(
      (acc, m) => (!m ? acc : [...acc, ...(typeof m === 'string' ? [m] : m)]),
      [],
    )
    .map((m) => `-${m}`)
    .reduce<string>(
      (classNames, suffix) => `${classNames} ${baseClassName}${suffix}`,
      baseClassName,
    );
}

export default mapModifiers;

/*!
 * Scroll down to next block element
 */
export function scrollDownNextSection(ref: React.RefObject<HTMLDivElement>) {
  if (ref && ref.current) {
    window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop - 68 }); // Minus header height
  }
}

/*!
 * getMousePosition(event) - cross browser normalizing of:
 * clientX, clientY, screenX, screenY, offsetX, offsetY, pageX, pageY
 * HTMLElement
 */
export function getMousePosition(
  evt:
    | React.MouseEvent<SVGPathElement, MouseEvent>
    | React.MouseEvent<SVGRectElement, MouseEvent>,
  item: HTMLDivElement,
) {
  let { pageX } = evt;
  let { pageY } = evt;
  if (pageX === undefined) {
    pageX = evt.clientX
      + document.body.scrollLeft
      + document.documentElement.scrollLeft;
    pageY = evt.clientY
      + document.body.scrollTop
      + document.documentElement.scrollTop;
  }

  const rect = item.getBoundingClientRect();
  const offsetX = evt.clientX - rect.left;
  const offsetY = evt.clientY - rect.top;

  return {
    client: { x: evt.clientX, y: evt.clientY }, // relative to the viewport
    screen: { x: evt.screenX, y: evt.screenY }, // relative to the physical screen
    offset: { x: offsetX, y: offsetY }, // relative to the event target
    page: { x: pageX, y: pageY }, // relative to the html document
  };
}

export function getDimensions(ele: HTMLDivElement) {
  const { height } = ele.getBoundingClientRect();
  const { offsetTop } = ele;
  const offsetBottom = offsetTop + height;

  return {
    height,
    offsetTop,
    offsetBottom,
  };
}

export function scrollStop(callback: (value: any) => void, time = 2000) {
  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling: any;

  // Listen for scroll events
  window.addEventListener(
    'scroll',
    () => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(callback, time);
    },
    false,
  );
}
export const handleScrollCenter = (ref: React.RefObject<HTMLDivElement | null>,
  classNameEleActive: string) => {
  const eleScroll = ref.current;
  const eleActive = document.querySelector(classNameEleActive);
  if (!eleActive || !eleScroll) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position scroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX = xEleActive - xEleScroll
    + widthEleActive / 2 + positionScroll - widthEleScroll / 2;
  eleScroll.scroll({
    left: scrollX,
    behavior: 'smooth',
  });
};

export const scrollCenter = (classNameEleScroll: string, classNameEleActive: string) => {
  const eleScroll = document.querySelector(classNameEleScroll);
  const eleActive = document.querySelector(classNameEleActive);
  if (!eleActive || !eleScroll) return;
  // get width element scroll
  const widthEleScroll = eleScroll.getBoundingClientRect().width;
  // get distance element scroll compared to y window
  const xEleScroll = eleScroll.getBoundingClientRect().x;
  // get width element active
  const widthEleActive = eleActive.getBoundingClientRect().width;
  // get distance element active compared to y window
  const xEleActive = eleActive.getBoundingClientRect().x;
  // get position scroll bar
  const positionScroll = eleScroll.scrollLeft;
  const scrollX = xEleActive - xEleScroll
    + widthEleActive / 2 + positionScroll - widthEleScroll / 2;
  eleScroll.scroll({
    left: scrollX,
    behavior: 'smooth',
  });
};

export function getImageURL(imgUrl?: string) {
  if (!BASE_URL || !imgUrl) return '';
  return BASE_URL + imgUrl;
}

export function getBlockData<T>(
  _code: string,
  listBlock?: BlockComponents<any>[],
): T | undefined {
  if (!listBlock) return undefined;
  return listBlock.find((item) => item.code === _code)?.blocks;
}

const formatKey = (key: string) => key.replace(/[A-Z]/g, '_$&').toLowerCase();

export function formatParams<T>(params?: T) {
  if (!params) return undefined;
  return Object.keys(params).reduce((prev, cur) => {
    const obj: any = {};
    const key = formatKey(cur);
    obj[key] = params[cur as keyof T];
    return { ...prev, ...obj };
  }, {});
}

const NovaWorld = process.env.REACT_APP_WORLD_URL;
const NovaWonderland = process.env.REACT_APP_WONDERLAND_URL;
const NovaTropicana = process.env.REACT_APP_TROPICANA_URL;
const NovaHabana = process.env.REACT_APP_HABANA_URL;
const Morito = process.env.REACT_APP_MORITO_URL;

export const externalUrl = (siteName: string) => {
  switch (siteName) {
    case 'novaworld':
      return NovaWorld || '';
    case 'novawonderland':
      return NovaWonderland || '';
    case 'novatropicana':
      return NovaTropicana || '';
    case 'novahabana':
      return NovaHabana || '';
    case 'novamorito':
      return Morito || '';
    default:
      break;
  }
  return '';
};

export function getLangURL(lang?: string) {
  if (lang && lang !== 'vi') return `/${lang}`;
  return '';
}

export const getSlugByTemplateCode = (
  templateCode: string,
  staticSlug?: StaticSlug[],
): string => {
  if (staticSlug) {
    const res = staticSlug.find((ele) => ele.templateCode === templateCode);
    if (res) return res.slug;
    return '';
  }
  return '';
};
