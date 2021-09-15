import React from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import { AddressItem, AddressItemType } from 'components/organisms/Footer';
import FormRegister from 'components/organisms/FormRegister';
import Map, { MapProps } from 'components/organisms/Map';

type FormContactUsProps = {
  dataInfoAddress?: AddressItemType[];
  consultancySystem?: ConsultancySystem;
  dataMap?: MapProps;
  title?: string;
  titleAddress?: string;
}

const FormContactUs: React.FC<FormContactUsProps> = ({
  dataInfoAddress,
  consultancySystem,
  dataMap,
  title,
  titleAddress,
}) => (
  <div className="t-form-contact">
    <Animate
      extendClassName="t-form-contact_title"
      type="beatSmall"
    >
      <Heading type="h2">
        {title}
        <Divider />
      </Heading>
    </Animate>
    <div className="t-form-contact_top">
      <Animate
        type="slideInLeft"
        extendClassName="t-form-contact_left"
      >
        <Text modifiers={['20x30', '700', 'center', 'white', 'uppercase']}>
          {titleAddress}
        </Text>
        {dataInfoAddress && (
        <div className="t-form-contact_listAddress">
          {dataInfoAddress.map((val, idx) => (
            <AddressItem
              name={val.name}
              address={val.address}
              key={`item${idx.toString()}`}
            />
          ))}
        </div>
        )}
      </Animate>
      <Animate
        type="slideInRight"
        extendClassName="t-form-contact_right"
      >
        <FormRegister
          consultancySystem={consultancySystem}
        />
      </Animate>
    </div>
    <Animate
      type="scaleY"
      extendClassName="t-form-contact_bottom"
    >
      <div className="t-form-contact_map">
        <Map mapAPIKey={dataMap?.mapAPIKey || ''} mapMarker={dataMap?.mapMarker} />
      </div>
    </Animate>
  </div>
);

export default FormContactUs;
