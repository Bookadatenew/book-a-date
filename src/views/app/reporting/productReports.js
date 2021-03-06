import React from 'react';
import { injectIntl } from 'react-intl';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';
import InboundReservations from '../../../containers/dashboards/InboundReservations';
import SmallLineCharts from '../../../containers/dashboards/SmallLineCharts';
import TopRatedItems from '../../../containers/dashboards/TopRatedItems';
import ProductCategoriesDoughnut from '../../../containers/dashboards/ProductCategoriesDoughnut';

const ProductReports = ({ intl, match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="menu.product-reports" match={match} />
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx lg="12" xl="12">
          <Row>
            <Colxx md="4" className="mb-4">
              <InboundReservations />
            </Colxx>
            <Colxx lg="8" xl="4" className="mb-4">
              <TopRatedItems />
            </Colxx>
            <Colxx lg="6" md="12" className="mb-4">
              {/* <ProductCategoriesPolarArea chartClass="dashboard-donut-chart" /> */}
              <ProductCategoriesDoughnut />
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </>
  );
};
export default React.memo(ProductReports);
