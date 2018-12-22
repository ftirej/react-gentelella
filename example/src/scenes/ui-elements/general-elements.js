import React from 'react';
import { Page, PageTitle, Notification } from 'react-gentelella';
import GlobalSearch from "../app/global-search";
import LeftTabs from './general-elements/left-tabs'
import RightTabs from './general-elements/right-tabs'
import VerticalTabsLeft from "./general-elements/vertical-tabs-left";
import VerticalTabsRight from './general-elements/vertical-tabs-right'

const GeneralElements = () => (
    <Page>
        <PageTitle title={'General Elements'}>
            <GlobalSearch/>
        </PageTitle>
        <Notification type="info" addClass="dark" nonblock={{nonblock: true}} hide={ false } title="PNotify" text="Welcome. Try hovering over me. You can click things behind me, because I'm non-blocking."/>
        <div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <LeftTabs/>
          </div>
          <div className="col-md-6 col-sm-6 col-xs-12">
            <RightTabs/>
          </div>
          <div className="clearfix"/>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <VerticalTabsLeft/>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
                <VerticalTabsRight/>
            </div>
        </div>
    </Page>
);

export default GeneralElements;
