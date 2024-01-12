//  import { lazy } from 'react'
//  import { Navigate, useRoutes } from 'react-router-dom'
//  import { PATH } from '~/constants/common'
//  import { Fallback } from '~/elements'
//  import Layout from '~/layouts'
//  import { Login } from '~/pages'
//  import RequireAuth from './require-auth'

import { useRoutes } from "react-router-dom"

//  import User from '~/pages/user'
//  import UserDetail from '~/pages/user/components/user-detail'
//  import Artist from '~/pages/artist'
//  import ArtistDetail from '~/pages/artist/components/artist-detail'
//  import RegisterArtist from '~/pages/artist/components/register-artist'
//  import Vod from '~/pages/vod'
//  import RegisterVod from '~/pages/vod/components/register-vod'
//  import VodDetail from '~/pages/vod/components/vod-detail'
//  import Photo from '~/pages/photo'
//  import RegisterPhoto from '~/pages/photo/components/register-photo'
//  import PhotoDetail from '~/pages/photo/components/photo-detail'
//  import Event from '~/pages/event'
//  import RegisterEvent from '~/pages/event/components/register-event'
//  import EventDetail from '~/pages/event/components/event-detail'
//  import Notice from '~/pages/notice'
//  import NoticeDetail from '~/pages/notice/components/notice-detail'
//  import RegisterNotice from '~/pages/notice/components/register-notice'
//  import Faq from '~/pages/faq'
//  import RegisterFaq from '~/pages/faq/components/register-faq'
//  import FaqDetail from '~/pages/faq/components/faq-detail'
//  import NotFound from '~/pages/404'

//  import MineCharge from '~/pages/payment/mine-charge'
//  import ContentPayment from '~/pages/payment/content-payment'
//  import SuperCheer from '~/pages/payment/super-cheer'
//  import TotalSale from '~/pages/payment/total-sale'

//  import ArtistSettlement from '~/pages/artist-settlement'
//  import ArtistSettlementDetail from '~/pages/artist-settlement/components/artis-settlement-detail'
//  import Banner from '~/pages/banner'

//  import TermAndCondition from '~/pages/term-and-condition'
//  import Instruction from '~/pages/instruction'
//  import MineChargeGuide from '~/pages/mine-charge-guide'
//  import DataPolicy from '~/pages/data-policy'
//  import CodeManagement from '~/pages/code-management'

 const Routes = () => {
   const routes = useRoutes([
    //  {
    //    element: <Layout />,
    //    children: [
    //      {
    //        element: <RequireAuth />,
    //        children: [
    //          {
    //            path: PATH.USER,
    //            children: [
    //              {
    //                index: true,
    //                element: (
    //                  <Fallback>
    //                    <User />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.DETAIL_USER,
    //                element: (
    //                  <Fallback>
    //                    <UserDetail />
    //                  </Fallback>
    //                ),
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.ARTIST,
    //            children: [
    //              {
    //                index: true,
    //                element: (
    //                  <Fallback>
    //                    <Artist />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.DETAIL_ARTIST,
    //                element: (
    //                  <Fallback>
    //                    <ArtistDetail />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.REGISTER_ARTIST,
    //                element: (
    //                  <Fallback>
    //                    <RegisterArtist />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.EDIT_ARTIST,
    //                element: (
    //                  <Fallback>
    //                    <RegisterArtist />
    //                  </Fallback>
    //                ),
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.NOTICE,
    //            children: [
    //              {
    //                index: true,
    //                element: (
    //                  <Fallback>
    //                    <Notice />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.REGISTER_NOTICE,
    //                element: (
    //                  <Fallback>
    //                    <RegisterNotice />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.NOTICE_DETAIL,
    //                element: (
    //                  <Fallback>
    //                    <NoticeDetail />
    //                  </Fallback>
    //                ),
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.NEW,
    //            children: [
    //              {
    //                index: true,
    //                element: <Navigate to={PATH.FAQ} />,
    //              },
    //              {
    //                path: PATH.FAQ,
    //                children: [
    //                  {
    //                    index: true,
    //                    element: (
    //                      <Fallback>
    //                        <Faq />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.REGISTER_FAQ,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterFaq />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.EDIT_FAQ,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterFaq />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.FAQ_DETAIL,
    //                    element: (
    //                      <Fallback>
    //                        <FaqDetail />
    //                      </Fallback>
    //                    ),
    //                  },
    //                ],
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.CONTENT,
    //            children: [
    //              {
    //                index: true,
    //                element: <Navigate to={PATH.VOD} />,
    //              },
    //              {
    //                path: PATH.VOD,
    //                children: [
    //                  {
    //                    index: true,
    //                    element: <Navigate to={PATH.VOD_LIST} />,
    //                  },
    //                  {
    //                    path: PATH.VOD_DETAIL,
    //                    element: (
    //                      <Fallback>
    //                        <VodDetail />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.VOD_LIST,
    //                    element: (
    //                      <Fallback>
    //                        <Vod />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.REGISTER_VOD,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterVod />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.EDIT_VOD,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterVod />
    //                      </Fallback>
    //                    ),
    //                  },
    //                ],
    //              },
    //              {
    //                path: PATH.PHOTO,
    //                children: [
    //                  {
    //                    index: true,
    //                    element: <Navigate to={PATH.PHOTO_LIST} />,
    //                  },
    //                  {
    //                    path: PATH.PHOTO_LIST,
    //                    element: (
    //                      <Fallback>
    //                        <Photo />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.REGISTER_PHOTO,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterPhoto />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.EDIT_PHOTO,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterPhoto />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.PHOTO_DETAIL,
    //                    element: (
    //                      <Fallback>
    //                        <PhotoDetail />
    //                      </Fallback>
    //                    ),
    //                  },
    //                ],
    //              },
    //              {
    //                path: PATH.EVENT,
    //                children: [
    //                  {
    //                    index: true,
    //                    element: <Navigate to={PATH.EVENT_LIST} />,
    //                  },
    //                  {
    //                    path: PATH.EVENT_LIST,
    //                    element: (
    //                      <Fallback>
    //                        <Event />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.EVENT_DETAIL,
    //                    element: (
    //                      <Fallback>
    //                        <EventDetail />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.REGISTER_EVENT,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterEvent />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.EDIT_EVENT,
    //                    element: (
    //                      <Fallback>
    //                        <RegisterEvent />
    //                      </Fallback>
    //                    ),
    //                  },
    //                ],
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.PAYMENT,
    //            children: [
    //              {
    //                index: true,
    //                element: <Navigate to={PATH.MINE_CHARGE} />,
    //              },
    //              {
    //                path: PATH.MINE_CHARGE,
    //                element: (
    //                  <Fallback>
    //                    <MineCharge />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.CONTENT_PAYMENT,
    //                element: (
    //                  <Fallback>
    //                    <ContentPayment />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.TOTAL_SALE,
    //                element: (
    //                  <Fallback>
    //                    <TotalSale />
    //                  </Fallback>
    //                ),
    //              },
    //              {
    //                path: PATH.SUPER_CHEER,
    //                element: (
    //                  <Fallback>
    //                    <SuperCheer />
    //                  </Fallback>
    //                ),
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.SETTLEMENT,
    //            children: [
    //              {
    //                index: true,
    //                element: <Navigate to={PATH.ARTIST_SETTLEMENT} />,
    //              },
    //              {
    //                path: PATH.ARTIST_SETTLEMENT,
    //                children: [
    //                  {
    //                    index: true,
    //                    element: (
    //                      <Fallback>
    //                        <ArtistSettlement />
    //                      </Fallback>
    //                    ),
    //                  },
    //                  {
    //                    path: PATH.ARTIST_SETTLEMENT_DETAIL,
    //                    element: (
    //                      <Fallback>
    //                        <ArtistSettlementDetail />
    //                      </Fallback>
    //                    ),
    //                  },
    //                ],
    //              },
    //            ],
    //          },
    //          {
    //            path: PATH.BANNER,
    //            element: (
    //              <Fallback>
    //                <Banner />
    //              </Fallback>
    //            ),
    //          },
    //          {
    //            path: PATH.CODE_MANAGEMENT,
    //            element: (
    //              <Fallback>
    //                <CodeManagement />
    //              </Fallback>
    //            ),
    //          },
    //        ],
    //      },
    //    ],
    //  },
    //  {
    //    path: PATH.LOGIN,
    //    element: <Login />,
    //  },
    //  {
    //    path: '',
    //    element: <Navigate to='/user/' />,
    //  },
    //  {
    //    path: '*',
    //    element: (
    //      <Fallback>
    //        <NotFound />
    //      </Fallback>
    //    ),
    //  },
    //  {
    //    path: PATH.TERM_AND_CONDITION,
    //    children: [
    //      {
    //        index: true,
    //        element: <Navigate to={'kr'} />,
    //      },
    //      {
    //        path: PATH.TERM_AND_CONDITION_DETAIL,
    //        element: (
    //          <Fallback>
    //            <TermAndCondition />
    //          </Fallback>
    //        ),
    //      },
    //    ],
    //  },
    //  {
    //    path: PATH.INSTRUCTIONS,
    //    children: [
    //      {
    //        index: true,
    //        element: <Navigate to={'kr'} />,
    //      },
    //      {
    //        path: PATH.INSTRUCTIONS_DETAIL,
    //        element: (
    //          <Fallback>
    //            <Instruction />
    //          </Fallback>
    //        ),
    //      },
    //    ],
    //  },
    //  {
    //    path: PATH.MINE_CHARGE_GUIDE,
    //    children: [
    //      {
    //        index: true,
    //        element: <Navigate to={'kr'} />,
    //      },
    //      {
    //        path: PATH.MINE_CHARGE_GUIDE_DETAIL,
    //        element: (
    //          <Fallback>
    //            <MineChargeGuide />
    //          </Fallback>
    //        ),
    //      },
    //    ],
    //  },
    //  {
    //    path: PATH.DATA_POLICY,
    //    children: [
    //      {
    //        index: true,
    //        element: <Navigate to={'kr'} />,
    //      },
    //      {
    //        path: PATH.DATA_POLICY_DETAIL,
    //        element: (
    //          <Fallback>
    //            <DataPolicy />
    //          </Fallback>
    //        ),
    //      },
    //    ],
    //  },
   ])
   return routes
 }

 export default Routes
