import React from 'react';

import Divider from 'components/atoms/Divider';
import Heading from 'components/atoms/Heading';
import Text from 'components/atoms/Text';
import Animate from 'components/organisms/Animate';
import FormRegister from 'components/organisms/FormRegister';
import Map, { MapProps } from 'components/organisms/Map';

type InfoAddressDataType = {
  title?: string;
  address?: string;
};

export const InfoAddress: React.FC<InfoAddressDataType> = ({ title, address }) => (
  <div className="m-info-address">
    <div className="m-info-address_name">
      <Text modifiers={['white', 'sm', '700']}>{title}</Text>
    </div>
    <div className="m-info-address_address">
      <Text modifiers={['white', 'sm', '400']}>
        {address}
      </Text>
    </div>
  </div>
);

type FormContactUsProps = {
  dataInfoAddress?: InfoAddressDataType[];
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
      type="fadeInUp"
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
            <InfoAddress
              title={val.title}
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
      type="fadeInUp"
      extendClassName="t-form-contact_bottom"
    >
      <div className="t-form-contact_map">
        <Map mapAPIkey={dataMap?.mapAPIkey || ''} mapMarker={dataMap?.mapMarker} />
      </div>
    </Animate>
  </div>
);

export default FormContactUs;
