import React from 'react';

import Detail from './detail';
import Discover from './discover';

import Banner from 'components/organisms/Banner';
import useMainLayout from 'hooks/useMainLayout';

const dummyLabels = [
  'phân kỳ: wonderland',
  'phân kỳ: Habana',
  'Phân kỳ: Tropicana',
];

const dummyPanel = new Array(3).fill({
  title: 'Khai trương thương hiệu Koski tại phân kỳ the Tropicana - NovaWorld Ho Tram',
  content: '<p>Đồng thời thực hiện chia cổ tức bằng cổ phiếu, với tỷ lệ thực hiện dự kiến tối đa 1:0,31(mỗi 100 cổ phiếu nhận tối đa 31 cổ phiếu). Ng&agrave;y đăng k&yacute; cuối c&ugrave;ng cho việc chốt danh s&aacute;ch cổ đ&ocirc;ng để lấy &yacute; kiến l&agrave; v&agrave;o 29/06/2021. Với diễn biến t&iacute;ch cực của cổ phiếu NVL từ đầu năm đến nay. Việc chia cổ tức bằng cổ phiếu th&igrave; gi&aacute; trị m&agrave; mỗi cổ đ&ocirc;ng nhận được sẽ lớn hơn rất nhiều so với việc chia cổ tức bằng tiền mặt.</p>\r\n\r\n<p>Tuần tới, ng&agrave;y 10/6/2021 l&agrave; ng&agrave;y đăng k&yacute; cuối c&ugrave;ng v&agrave; ng&agrave;y 09/6/2021 l&agrave; ng&agrave;y giao dịch kh&ocirc;ng hưởng quyền ph&aacute;t h&agrave;nh cổ phiếu để tăng vốn cổ phần từ nguồn vốn chủ sở hữu của C&ocirc;ng ty Cổ phần Tập đo&agrave;n Đầu tư Địa ốc No Va (Novaland, m&atilde; chứng kho&aacute;n NVL) đ&atilde; được c&ocirc;ng bố trước đ&oacute;. Cụ thể, Novaland sẽ chia thưởng bằng cổ phiếu, tỷ lệ 555:198 (tương ứng cổ đ&ocirc;ng sở hữu 555 cp được nhận về 198 cp mới).&nbsp;</p>\r\n\r\n<p>Thị trường chứng kho&aacute;n từ đầu năm đến nay ghi nhận nhiều đợt tăng gi&aacute; mạnh của c&aacute;c c&ocirc;ng ty ni&ecirc;m yết c&oacute; hoạt động kinh doanh tốt, nhiều quan điểm ph&acirc;n t&iacute;ch cho rằng gi&aacute; cổ phiếu NVL vẫn c&ograve;n dư địa tăng trưởng. Trong 3 năm tới từ 2021-2023, lợi nhuận của Novaland dự kiến sẽ tăng đột biến từ c&aacute;c Dự &aacute;n trọng điểm đang được Tập đo&agrave;n đẩy mạnh triển khai, ho&agrave;n thiện sớm hơn nhiều so với dự kiến ban đầu, h&ograve;a nhịp với tiến độ kh&aacute;nh th&agrave;nh, đưa v&agrave;o sử dụng h&agrave;ng loạt dự &aacute;n hạ tầng giao th&ocirc;ng quan trọng. Điển h&igrave;nh như ba dự &aacute;n trọng điểm NovaWorld Ho Tram (B&agrave; Rịa &ndash; Vũng T&agrave;u), NovaWorld Phan Thiet (B&igrave;nh Thuận), v&agrave; Aqua City (Đồng Nai) sẽ đều được ghi nhận doanh thu, lợi nhuận trong v&ograve;ng 3 năm tới, sớm hơn 5 năm so với kế hoạch ban đầu nhờ v&agrave;o c&aacute;c yếu tố chủ quan v&agrave; kh&aacute;ch quan. Dự kiến, tổng lợi nhuận thu được từ 3 si&ecirc;u dự &aacute;n n&agrave;y c&oacute; thể l&ecirc;n tới 2 tỷ Đ&ocirc;-la Mỹ.<br />\r\n&nbsp;</p>\r\n\r\n<p><img alt="" src="https://www.novaland.com.vn/Data/Sites/1/media/tin-tuc/2021/0604/thuong%20co%20phieu.jpg" /></p>\r\n<em>Phối cảnh Habana Island &ndash; NovaWorld Ho Tram (B&agrave; Rịa &ndash; Vũng T&agrave;u) quy m&ocirc; 1,000 ha của Novaland</em>\r\n\r\n<p>&nbsp;</p>\r\n\r\n<p>Theo như Tờ tr&igrave;nh Đại hội đồng cổ đ&ocirc;ng năm nay, Kế hoạch Doanh thu của Novaland ước t&iacute;nh l&agrave; hơn 27.000 tỷ đồng c&ograve;n Lợi nhuận ước t&iacute;nh l&agrave; khoảng 4.100 tỷ đồng. Tập đo&agrave;n dự kiến sẽ nỗ lực để vượt con số n&agrave;y dựa v&agrave;o kết quả b&aacute;n h&agrave;ng v&agrave; b&agrave;n giao sản phẩm tốt, cũng như cộng th&ecirc;m việc chuyển nhượng dự &aacute;n cho c&aacute;c nh&agrave; đầu tư kh&aacute;c nhiều khả năng đạt được mức lợi nhuận tốt hơn ước t&iacute;nh ban đầu.&nbsp;</p>\r\n\r\n<p>Qu&yacute; I/2021, Novaland ghi nhận quỹ đất hơn 5.400ha, ph&acirc;n bổ cho c&aacute;c d&ograve;ng sản phẩm chủ lực l&agrave; BĐS Đ&ocirc; thị trung t&acirc;m tại TP.HCM v&agrave; c&aacute;c khu vực vệ tinh; BĐS Đ&ocirc; thị du lịch tại c&aacute;c th&agrave;nh phố c&oacute; tiềm năng du lịch, đảm bảo đ&agrave; tăng trưởng bền vững cho Tập đo&agrave;n trong 7 - 10 năm tới. Tổng gi&aacute; trị ph&aacute;t triển dự &aacute;n (Gross Development Value - GDV) của quỹ đất n&agrave;y ước đạt gần 45 tỷ USD. B&ecirc;n cạnh đ&oacute;, Tập đo&agrave;n cũng đang nghi&ecirc;n cứu v&agrave; ph&aacute;t triển th&ecirc;m mảng BĐS c&ocirc;ng nghiệp.</p>\r\n\r\n<p>Kh&ocirc;ng chỉ Novaland, c&oacute; rất nhiều doanh nghiệp kh&aacute;c cũng tiến h&agrave;nh chốt danh s&aacute;ch cổ đ&ocirc;ng để trả cổ tức. Thị trường chứng kho&aacute;n s&ocirc;i động với h&agrave;ng loạt kỷ lục mới về điểm số, thanh khoản vượt trội so với nhiều năm trước. Với việc doanh nghiệp ni&ecirc;m yết c&oacute; hoạt động kinh doanh vững v&agrave;ng, dư địa tăng trưởng tốt - quyết định chia cổ tức được giới đầu tư đ&oacute;n nhận t&iacute;ch cực.</p>',
  publishedAt: '12/11/2020',
  subTitle: 'Vui chơi giải trí',
});

const dummyCard = Array(3).fill({
  imgSrc: 'https://source.unsplash.com/random',
  title: 'Khai trương thương hiệu Koski tại phân kỳ the Tropicana - Novaworld Ho Tram',
  description: 'Bất động sản nghỉ dưỡng tại Việt Nam luôn được xem là phân khúc hấp dẫn trong mắt các nhà đầu tư.',
  href: '',
});

const ExperienceJourneyDetail:React.FC = () => {
  useMainLayout('another');
  return (
    <>
      <section className="s-banner">
        <Banner thumbnail="https://source.unsplash.com/random" layerDew={false} />
      </section>
      <section className="s-wrap s-donut">
        <Detail panel={dummyPanel} labels={dummyLabels} />
        <Discover title="KHÁM PHÁ THÊM" listCard={dummyCard} />
      </section>
    </>
  );
};

export default ExperienceJourneyDetail;
