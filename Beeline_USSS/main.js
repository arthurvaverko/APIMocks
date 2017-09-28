
/*
 * my.beeline.ru
 *
 * 
 */


var localization = require("./routes/localization.js")
var de = require("./routes/de.js")
var request = require("./routes/request.js")
var auth = require("./routes/auth.js")
var cn = require("./routes/cn.js")
var fttb = require("./routes/fttb.js")
var sso = require("./routes/sso.js")
var setting = require("./routes/setting.js")
var smpp = require("./routes/smpp.js")
var offer = require("./routes/offer.js")
var sdb = require("./routes/sdb.js")
var inac = require("./routes/inac.js")
var action = require("./routes/action.js")
var detail = require("./routes/detail.js")
var invite = require("./routes/invite.js")
var rp = require("./routes/rp.js")
var info = require("./routes/info.js")

/* Route definition styles:
 *
 *	define(path, method, function)
 *	soap(path, soapAction, function)
 *
 */
Sandbox.define("//localization/", "GET", localization.getLocalization);
Sandbox.define("//localization/batch", "PUT", localization.putLocalizationBatch);
Sandbox.define("//de/", "GET", de.getDe);
Sandbox.define("//de/", "PUT", de.putDe);
Sandbox.define("//request/activateURC", "PUT", request.putRequestActivateurc);
Sandbox.define("//request/bonusTransfer", "POST", request.postRequestBonustransfer);
Sandbox.define("//request/callForward", "GET", request.getRequestCallforward);
Sandbox.define("//request/callForward/edit", "PUT", request.putRequestCallforwardEdit);
Sandbox.define("//request/cancelFutureRequest", "POST", request.postRequestCancelfuturerequest);
Sandbox.define("//request/caseStatus", "PUT", request.putRequestCasestatus);
Sandbox.define("//request/changeBlackList", "DELETE", request.deleteRequestChangeblacklist);
Sandbox.define("//request/changeBlackList", "PUT", request.putRequestChangeblacklist);
Sandbox.define("//request/changeParamsConnectionBonusService", "PUT", request.putRequestChangeparamsconnectionbonusservice);
Sandbox.define("//request/changePostpaidLimit", "DELETE", request.deleteRequestChangepostpaidlimit);
Sandbox.define("//request/changePostpaidLimit", "PUT", request.putRequestChangepostpaidlimit);
Sandbox.define("//request/changePricePlan", "GET", request.getRequestChangepriceplan);
Sandbox.define("//request/changePricePlan", "PUT", request.putRequestChangepriceplan);
Sandbox.define("//request/changeService", "PUT", request.putRequestChangeservice);
Sandbox.define("//request/connectVipStatus", "GET", request.getRequestConnectvipstatus);
Sandbox.define("//request/createBlackListCallsRequest", "GET", request.getRequestCreateblacklistcallsrequest);
Sandbox.define("//request/createConvergentRequest", "PUT", request.putRequestCreateconvergentrequest);
Sandbox.define("//request/delFeatureParam", "POST", request.postRequestDelfeatureparam);
Sandbox.define("//request/invoiceAddr", "GET", request.getRequestInvoiceaddr);
Sandbox.define("//request/list", "PUT", request.putRequestList);
Sandbox.define("//request/list/xls", "GET", request.getRequestListXls);
Sandbox.define("//request/pcl", "PUT", request.putRequestPcl);
Sandbox.define("//request/postpaidDetail", "GET", request.getRequestPostpaiddetail);
Sandbox.define("//request/preToPostRequest", "PUT", request.putRequestPretopostrequest);
Sandbox.define("//request/prepaidDetail", "GET", request.getRequestPrepaiddetail);
Sandbox.define("//request/requestAttachment", "GET", request.getRequestRequestattachment);
Sandbox.define("//request/requestDetails", "GET", request.getRequestRequestdetails);
Sandbox.define("//request/restoreCTN", "GET", request.getRequestRestorectn);
Sandbox.define("//request/serviceActivate", "PUT", request.putRequestServiceactivate);
Sandbox.define("//request/serviceDeactivate", "GET", request.getRequestServicedeactivate);
Sandbox.define("//request/servicesActivate", "PUT", request.putRequestServicesactivate);
Sandbox.define("//request/subscription/remove", "GET", request.getRequestSubscriptionRemove);
Sandbox.define("//request/suspendRestore", "GET", request.getRequestSuspendrestore);
Sandbox.define("//request/unbilledCallsList", "GET", request.getRequestUnbilledcallslist);
Sandbox.define("//auth/auth", "GET", auth.getAuthAuth);
Sandbox.define("//auth/auth", "PUT", auth.putAuthAuth);
Sandbox.define("//auth/authBySocialID", "GET", auth.getAuthAuthbysocialid);
Sandbox.define("//auth/authBySsoCookie", "GET", auth.getAuthAuthbyssocookie);
Sandbox.define("//auth/authBySysToken", "GET", auth.getAuthAuthbysystoken);
Sandbox.define("//auth/createSelfreg", "PUT", auth.putAuthCreateselfreg);
Sandbox.define("//auth/externalManagementConfirmationRequest", "POST", auth.postAuthExternalmanagementconfirmationrequest);
Sandbox.define("//auth/generateOneTimeToken", "GET", auth.getAuthGenerateonetimetoken);
Sandbox.define("//auth/passReset", "GET", auth.getAuthPassreset);
Sandbox.define("//auth/remindLogin", "GET", auth.getAuthRemindlogin);
Sandbox.define("//auth/verifyOneTimeToken", "GET", auth.getAuthVerifyonetimetoken);
Sandbox.define("//auth/xbr", "GET", auth.getAuthXbr);
Sandbox.define("//cn/", "GET", cn.getCn);
Sandbox.define("//cn/", "PUT", cn.putCn);
Sandbox.define("//fttb/authParams", "GET", fttb.getFttbAuthparams);
Sandbox.define("//fttb/createAccount", "POST", fttb.postFttbCreateaccount);
Sandbox.define("//fttb/createAlias", "POST", fttb.postFttbCreatealias);
Sandbox.define("//fttb/notifications", "PUT", fttb.putFttbNotifications);
Sandbox.define("//fttb/setPassword", "POST", fttb.postFttbSetpassword);
Sandbox.define("//fttb/sync", "PUT", fttb.putFttbSync);
Sandbox.define("//sso/changeDefaultSSOLogin", "GET", sso.getSsoChangedefaultssologin);
Sandbox.define("//sso/contactData", "GET", sso.getSsoContactdata);
Sandbox.define("//sso/contactData/confirmName", "PUT", sso.putSsoContactdataConfirmname);
Sandbox.define("//sso/createSSOSession", "PUT", sso.putSsoCreatessosession);
Sandbox.define("//sso/delAccountLink", "GET", sso.getSsoDelaccountlink);
Sandbox.define("//sso/delSocialID", "GET", sso.getSsoDelsocialid);
Sandbox.define("//sso/enableRequestToLink", "GET", sso.getSsoEnablerequesttolink);
Sandbox.define("//sso/findSSOAccountBySocialId", "GET", sso.getSsoFindssoaccountbysocialid);
Sandbox.define("//sso/getAccountLinks", "GET", sso.getSsoGetaccountlinks);
Sandbox.define("//sso/linkSocialAccount", "PUT", sso.putSsoLinksocialaccount);
Sandbox.define("//sso/linkage/accountNickname", "DELETE", sso.deleteSsoLinkageAccountnickname);
Sandbox.define("//sso/linkage/changeLinkedAccountNickname", "PUT", sso.putSsoLinkageChangelinkedaccountnickname);
Sandbox.define("//sso/linkage/ctnAndSms/creation", "GET", sso.getSsoLinkageCtnandsmsCreation);
Sandbox.define("//sso/linkage/ctnAndSms/creation", "PUT", sso.putSsoLinkageCtnandsmsCreation);
Sandbox.define("//sso/linkage/loginAndPassword/creation", "PUT", sso.putSsoLinkageLoginandpasswordCreation);
Sandbox.define("//sso/linkage/request/cancel", "PUT", sso.putSsoLinkageRequestCancel);
Sandbox.define("//sso/linkage/request/creation", "POST", sso.postSsoLinkageRequestCreation);
Sandbox.define("//sso/linkage/request/update", "PUT", sso.putSsoLinkageRequestUpdate);
Sandbox.define("//sso/linkageRequests", "GET", sso.getSsoLinkagerequests);
Sandbox.define("//sso/list", "GET", sso.getSsoList);
Sandbox.define("//sso/selectCTN", "GET", sso.getSsoSelectctn);
Sandbox.define("//sso/showEnableRequestToLink", "GET", sso.getSsoShowenablerequesttolink);
Sandbox.define("//sso/socialAccount", "GET", sso.getSsoSocialaccount);
Sandbox.define("//sso/ssoOfferReaction", "GET", sso.getSsoSsoofferreaction);
Sandbox.define("//sso/subscribers", "GET", sso.getSsoSubscribers);
Sandbox.define("//setting/changePassword", "PUT", setting.putSettingChangepassword);
Sandbox.define("//setting/notifications", "GET", setting.getSettingNotifications);
Sandbox.define("//setting/notifications", "PUT", setting.putSettingNotifications);
Sandbox.define("//setting/notifications/confirm", "GET", setting.getSettingNotificationsConfirm);
Sandbox.define("//setting/notifications/confirm", "PUT", setting.putSettingNotificationsConfirm);
Sandbox.define("//smpp/deliver", "GET", smpp.getSmppDeliver);
Sandbox.define("//offer/accept", "GET", offer.getOfferAccept);
Sandbox.define("//offer/check", "GET", offer.getOfferCheck);
Sandbox.define("//offer/sendAnswerToSpss", "PUT", offer.putOfferSendanswertospss);
Sandbox.define("//sdb/changeOwnerService", "GET", sdb.getSdbChangeownerservice);
Sandbox.define("//sdb/delete", "GET", sdb.getSdbDelete);
Sandbox.define("//sdb/deleteSubscriber", "GET", sdb.getSdbDeletesubscriber);
Sandbox.define("//sdb/info", "GET", sdb.getSdbInfo);
Sandbox.define("//sdb/owner", "GET", sdb.getSdbOwner);
Sandbox.define("//sdb/replaceSubscriber", "GET", sdb.getSdbReplacesubscriber);
Sandbox.define("//inac/account/NPStatistic", "GET", inac.getInacAccountNpstatistic);
Sandbox.define("//inac/account/activateCreditCard", "GET", inac.getInacAccountActivatecreditcard);
Sandbox.define("//inac/account/activateLogin", "GET", inac.getInacAccountActivatelogin);
Sandbox.define("//inac/account/addCase", "PUT", inac.putInacAccountAddcase);
Sandbox.define("//inac/account/alias", "GET", inac.getInacAccountAlias);
Sandbox.define("//inac/account/balance", "GET", inac.getInacAccountBalance);
Sandbox.define("//inac/account/bonusBalance", "GET", inac.getInacAccountBonusbalance);
Sandbox.define("//inac/account/bonuses", "GET", inac.getInacAccountBonuses);
Sandbox.define("//inac/account/cashflowStatistic", "GET", inac.getInacAccountCashflowstatistic);
Sandbox.define("//inac/account/changeAutoPayStatus", "GET", inac.getInacAccountChangeautopaystatus);
Sandbox.define("//inac/account/changeBlock", "GET", inac.getInacAccountChangeblock);
Sandbox.define("//inac/account/checkConnectionAddress", "GET", inac.getInacAccountCheckconnectionaddress);
Sandbox.define("//inac/account/checkIptvGuid", "GET", inac.getInacAccountCheckiptvguid);
Sandbox.define("//inac/account/checkWiFiRouter", "GET", inac.getInacAccountCheckwifirouter);
Sandbox.define("//inac/account/compensations", "GET", inac.getInacAccountCompensations);
Sandbox.define("//inac/account/contractInfo", "GET", inac.getInacAccountContractinfo);
Sandbox.define("//inac/account/createAlias", "POST", inac.postInacAccountCreatealias);
Sandbox.define("//inac/account/creditCardAndAutoPayInfo", "GET", inac.getInacAccountCreditcardandautopayinfo);
Sandbox.define("//inac/account/delIpoeAuth", "DELETE", inac.deleteInacAccountDelipoeauth);
Sandbox.define("//inac/account/finInfo", "GET", inac.getInacAccountFininfo);
Sandbox.define("//inac/account/getCtnStatus", "GET", inac.getInacAccountGetctnstatus);
Sandbox.define("//inac/account/internetStatistic", "GET", inac.getInacAccountInternetstatistic);
Sandbox.define("//inac/account/invitedCtns", "GET", inac.getInacAccountInvitedctns);
Sandbox.define("//inac/account/ipoeParams", "GET", inac.getInacAccountIpoeparams);
Sandbox.define("//inac/account/mobileInvite", "GET", inac.getInacAccountMobileinvite);
Sandbox.define("//inac/account/payments", "GET", inac.getInacAccountPayments);
Sandbox.define("//inac/account/promisedpayment", "GET", inac.getInacAccountPromisedpayment);
Sandbox.define("//inac/account/sendSMSOrEmailForRecovery", "GET", inac.getInacAccountSendsmsoremailforrecovery);
Sandbox.define("//inac/account/setPersonalData", "POST", inac.postInacAccountSetpersonaldata);
Sandbox.define("//inac/equipment/info/addXboxGuid", "POST", inac.postInacEquipmentInfoAddxboxguid);
Sandbox.define("//inac/equipment/info/changeConsoleStatusNotification", "PUT", inac.putInacEquipmentInfoChangeconsolestatusnotification);
Sandbox.define("//inac/equipment/info/debitForRouter", "GET", inac.getInacEquipmentInfoDebitforrouter);
Sandbox.define("//inac/equipment/info/routers", "GET", inac.getInacEquipmentInfoRouters);
Sandbox.define("//inac/equipment/info/statusNotification", "GET", inac.getInacEquipmentInfoStatusnotification);
Sandbox.define("//inac/equipment/info/wifiRouterBuyTickets", "GET", inac.getInacEquipmentInfoWifirouterbuytickets);
Sandbox.define("//inac/hd/checkMoveCode", "GET", inac.getInacHdCheckmovecode);
Sandbox.define("//inac/hd/closeTicket", "GET", inac.getInacHdCloseticket);
Sandbox.define("//inac/hd/createNewHouseTicket", "PUT", inac.putInacHdCreatenewhouseticket);
Sandbox.define("//inac/hd/createServiceConnectionTicket", "PUT", inac.putInacHdCreateserviceconnectionticket);
Sandbox.define("//inac/hd/createTicket", "GET", inac.getInacHdCreateticket);
Sandbox.define("//inac/service/info/accumParams", "GET", inac.getInacServiceInfoAccumparams);
Sandbox.define("//inac/service/info/availablePresets", "GET", inac.getInacServiceInfoAvailablepresets);
Sandbox.define("//inac/service/info/availableServices", "GET", inac.getInacServiceInfoAvailableservices);
Sandbox.define("//inac/service/info/buyPhoneKit", "GET", inac.getInacServiceInfoBuyphonekit);
Sandbox.define("//inac/service/info/checkMobileToken", "GET", inac.getInacServiceInfoCheckmobiletoken);
Sandbox.define("//inac/service/info/checkNetphoneNickname", "GET", inac.getInacServiceInfoChecknetphonenickname);
Sandbox.define("//inac/service/info/checkPhoneKit", "GET", inac.getInacServiceInfoCheckphonekit);
Sandbox.define("//inac/service/info/connectedServices", "GET", inac.getInacServiceInfoConnectedservices);
Sandbox.define("//inac/service/info/consolePrice", "GET", inac.getInacServiceInfoConsoleprice);
Sandbox.define("//inac/service/info/globalProblems", "GET", inac.getInacServiceInfoGlobalproblems);
Sandbox.define("//inac/service/info/globalServices", "GET", inac.getInacServiceInfoGlobalservices);
Sandbox.define("//inac/service/info/iptvBaseTariffStructure", "GET", inac.getInacServiceInfoIptvbasetariffstructure);
Sandbox.define("//inac/service/info/iptvChannels", "GET", inac.getInacServiceInfoIptvchannels);
Sandbox.define("//inac/service/info/iptvDiscounts", "GET", inac.getInacServiceInfoIptvdiscounts);
Sandbox.define("//inac/service/info/iptvRentServicePriceInfo", "GET", inac.getInacServiceInfoIptvrentservicepriceinfo);
Sandbox.define("//inac/service/info/mappingServices", "GET", inac.getInacServiceInfoMappingservices);
Sandbox.define("//inac/service/info/npUserInfo", "GET", inac.getInacServiceInfoNpuserinfo);
Sandbox.define("//inac/service/info/ottChannels", "GET", inac.getInacServiceInfoOttchannels);
Sandbox.define("//inac/service/info/ottDevices", "GET", inac.getInacServiceInfoOttdevices);
Sandbox.define("//inac/service/info/policies", "PUT", inac.putInacServiceInfoPolicies);
Sandbox.define("//inac/service/info/selectedServices", "GET", inac.getInacServiceInfoSelectedservices);
Sandbox.define("//inac/service/info/serviceParams", "GET", inac.getInacServiceInfoServiceparams);
Sandbox.define("//inac/service/info/serviceStatistic", "GET", inac.getInacServiceInfoServicestatistic);
Sandbox.define("//inac/service/info/targetedOffers", "GET", inac.getInacServiceInfoTargetedoffers);
Sandbox.define("//inac/service/info/tbStatistic", "GET", inac.getInacServiceInfoTbstatistic);
Sandbox.define("//inac/service/management/activatePromisedPayment", "POST", inac.postInacServiceManagementActivatepromisedpayment);
Sandbox.define("//inac/service/management/cancelFutureTask", "POST", inac.postInacServiceManagementCancelfuturetask);
Sandbox.define("//inac/service/management/changeFirewall", "GET", inac.getInacServiceManagementChangefirewall);
Sandbox.define("//inac/service/management/changeTicketParams", "POST", inac.postInacServiceManagementChangeticketparams);
Sandbox.define("//inac/service/management/delOttDevice", "GET", inac.getInacServiceManagementDelottdevice);
Sandbox.define("//inac/service/management/futureInfo", "GET", inac.getInacServiceManagementFutureinfo);
Sandbox.define("//inac/service/management/label", "PUT", inac.putInacServiceManagementLabel);
Sandbox.define("//inac/service/management/sendUserReactionToSpss", "GET", inac.getInacServiceManagementSenduserreactiontospss);
Sandbox.define("//inac/service/management/servicesManagement", "PUT", inac.putInacServiceManagementServicesmanagement);
Sandbox.define("//inac/service/management/servicesManagementCheck", "PUT", inac.putInacServiceManagementServicesmanagementcheck);
Sandbox.define('/action/check', 'GET', action.getActionCheck);
Sandbox.define("//action/connect", "POST", action.postActionConnect);
Sandbox.define("//detail/periodic/request", "DELETE", detail.deleteDetailPeriodicRequest);
Sandbox.define("//detail/periodic/request", "GET", detail.getDetailPeriodicRequest);
Sandbox.define("//detail/periodic/request", "POST", detail.postDetailPeriodicRequest);
Sandbox.define("//detail/periodic/request", "PUT", detail.putDetailPeriodicRequest);
Sandbox.define("//detail/periodic/updateNotificationEmail", "PUT", detail.putDetailPeriodicUpdatenotificationemail);
Sandbox.define("//invite/accept", "GET", invite.getInviteAccept);
Sandbox.define("//invite/cancel", "GET", invite.getInviteCancel);
Sandbox.define("//invite/create", "GET", invite.getInviteCreate);
Sandbox.define("//invite/create", "PUT", invite.putInviteCreate);
Sandbox.define("//invite/income", "GET", invite.getInviteIncome);
Sandbox.define("//invite/list", "GET", invite.getInviteList);
Sandbox.define("//invite/reject", "GET", invite.getInviteReject);
Sandbox.define("//rp/", "GET", rp.getRp);
Sandbox.define("//info/accumulators", "GET", info.getInfoAccumulators);
Sandbox.define("//info/arpu", "GET", info.getInfoArpu);
Sandbox.define("//info/autoPayment", "GET", info.getInfoAutopayment);
Sandbox.define("//info/availablePromisedPayment", "GET", info.getInfoAvailablepromisedpayment);
Sandbox.define("//info/billPeriods", "GET", info.getInfoBillperiods);
Sandbox.define("//info/blackList/calls", "GET", info.getInfoBlacklistCalls);
Sandbox.define("//info/blackList/numbers", "GET", info.getInfoBlacklistNumbers);
Sandbox.define("//info/bonusTransfer", "GET", info.getInfoBonustransfer);
Sandbox.define("//info/callForward", "GET", info.getInfoCallforward);
Sandbox.define("//info/checkChangePaymentMethodReady", "GET", info.getInfoCheckchangepaymentmethodready);
Sandbox.define("//info/checkInternationalCalls", "GET", info.getInfoCheckinternationalcalls);
Sandbox.define("//info/checkInternetConnectionAvailability", "GET", info.getInfoCheckinternetconnectionavailability);
Sandbox.define("//info/checkPersonalData", "GET", info.getInfoCheckpersonaldata);
Sandbox.define("//info/conflict", "GET", info.getInfoConflict);
Sandbox.define("//info/connHistory", "GET", info.getInfoConnhistory);
Sandbox.define("//info/convergentActivatonStatus", "GET", info.getInfoConvergentactivatonstatus);
Sandbox.define("//info/convergentRequestParams", "GET", info.getInfoConvergentrequestparams);
Sandbox.define("//info/creditLimit", "GET", info.getInfoCreditlimit);
Sandbox.define("//info/currentPromisedPayment", "GET", info.getInfoCurrentpromisedpayment);
Sandbox.define("//info/debtList", "GET", info.getInfoDebtlist);
Sandbox.define("//info/decodeAnalyticId", "POST", info.postInfoDecodeanalyticid);
Sandbox.define("//info/deposits", "GET", info.getInfoDeposits);
Sandbox.define("//info/dtm", "GET", info.getInfoDtm);
Sandbox.define("//info/genAnalyticId", "GET", info.getInfoGenanalyticid);
Sandbox.define("//info/geo", "GET", info.getInfoGeo);
Sandbox.define("//info/getAvailableServices", "GET", info.getInfoGetavailableservices);
Sandbox.define("//info/getChangePaymentsData", "GET", info.getInfoGetchangepaymentsdata);
Sandbox.define("//info/invoicesInfo", "GET", info.getInfoInvoicesinfo);
Sandbox.define("//info/loginConsolidation", "GET", info.getInfoLoginconsolidation);
Sandbox.define("//info/loginInfo", "GET", info.getInfoLogininfo);
Sandbox.define("//info/mcBalance", "GET", info.getInfoMcbalance);
Sandbox.define("//info/networkTechnology", "GET", info.getInfoNetworktechnology);
Sandbox.define("//info/nlpInfo", "GET", info.getInfoNlpinfo);
Sandbox.define("//info/nrtbcBalance", "GET", info.getInfoNrtbcbalance);
Sandbox.define("//info/onlineBillDetail", "GET", info.getInfoOnlinebilldetail);
Sandbox.define("//info/payType", "GET", info.getInfoPaytype);
Sandbox.define("//info/payments/history", "GET", info.getInfoPaymentsHistory);
Sandbox.define("//info/payments/historyFile", "GET", info.getInfoPaymentsHistoryfile);
Sandbox.define("//info/pcl", "GET", info.getInfoPcl);
Sandbox.define("//info/pinPuk", "GET", info.getInfoPinpuk);
Sandbox.define("//info/portation", "GET", info.getInfoPortation);
Sandbox.define("//info/postpaidBalance", "GET", info.getInfoPostpaidbalance);
Sandbox.define("//info/postpaidDebt", "GET", info.getInfoPostpaiddebt);
Sandbox.define("//info/postpaidInvoiceDetails", "GET", info.getInfoPostpaidinvoicedetails);
Sandbox.define("//info/prepaidAddBalance", "GET", info.getInfoPrepaidaddbalance);
Sandbox.define("//info/prepaidBalance", "GET", info.getInfoPrepaidbalance);
Sandbox.define("//info/pricePlan", "GET", info.getInfoPriceplan);
Sandbox.define("//info/pricePlanAvailableList", "GET", info.getInfoPriceplanavailablelist);
Sandbox.define("//info/pricePlanChangingAvailability", "GET", info.getInfoPriceplanchangingavailability);
Sandbox.define("//info/rests", "GET", info.getInfoRests);
Sandbox.define("//info/roleAndSecurityElements", "GET", info.getInfoRoleandsecurityelements);
Sandbox.define("//info/rolesInfo", "GET", info.getInfoRolesinfo);
Sandbox.define("//info/sebInvitation", "GET", info.getInfoSebinvitation);
Sandbox.define("//info/sendInvoiceToEmail", "GET", info.getInfoSendinvoicetoemail);
Sandbox.define("//info/serviceAvailableList", "GET", info.getInfoServiceavailablelist);
Sandbox.define("//info/serviceList", "GET", info.getInfoServicelist);
Sandbox.define("//info/serviceParams", "GET", info.getInfoServiceparams);
Sandbox.define("//info/serviceParamsValues", "GET", info.getInfoServiceparamsvalues);
Sandbox.define("//info/setNotificationStatus", "POST", info.postInfoSetnotificationstatus);
Sandbox.define("//info/status", "GET", info.getInfoStatus);
Sandbox.define("//info/subscriptions", "GET", info.getInfoSubscriptions);
Sandbox.define("//info/targetedOffers", "GET", info.getInfoTargetedoffers);
Sandbox.define("//info/targetedOffersHistory", "GET", info.getInfoTargetedoffershistory);
Sandbox.define("//info/tickets", "GET", info.getInfoTickets);
Sandbox.define("//info/unbilledCalls", "GET", info.getInfoUnbilledcalls);
Sandbox.define("//info/unbilledCharges", "GET", info.getInfoUnbilledcharges);
Sandbox.define("//info/unpaidInvoice", "GET", info.getInfoUnpaidinvoice);
Sandbox.define("//info/upsellPricePlan", "GET", info.getInfoUpsellpriceplan);
Sandbox.define("//info/userNotifications", "GET", info.getInfoUsernotifications);
Sandbox.define("//info/userType", "GET", info.getInfoUsertype);