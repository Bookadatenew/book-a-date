import React from 'react';
import { Card, CardBody, Row } from 'reactstrap';
import { Colxx, Separator } from '../../components/common/CustomBootstrap';

const LastSevenDays = () => {
  return (
    <Card>
      <CardBody>
        <Row className="d-flex justify-content-between">
          <div className="card-text font-weight-semibold m-2">Last 7 days</div>
        </Row>
        <Separator className="mb-3" />
        <Row>
          <Colxx>
            <p className="lead font-weight-bolder">10</p>
            <p className="card-text font-weight-semibold mb-0">Reservations</p>
          </Colxx>
          <Colxx>
            <p className="lead font-weight-bolder">2</p>
            <p className="card-text font-weight-semibold mb-0">Guests</p>
          </Colxx>
          <Colxx>
            <p className="lead font-weight-bolder">420 $</p>
            <p className="card-text font-weight-semibold mb-0">Value</p>
          </Colxx>
        </Row>
      </CardBody>
    </Card>
  );
};

export default React.memo(LastSevenDays);
