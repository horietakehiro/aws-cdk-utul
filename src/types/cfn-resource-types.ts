import { InputResource, InputResourceWithoutType, OutputResource } from "./../typed-resource";
export type RESOURCE<T> = (resource: InputResourceWithoutType<T>) => InputResource<T>;
import { _ALEXA_ASK_SKILL } from "./cfn-resource-types/alexa-ask-skill";
import { _AWS_ACCESSANALYZER_ANALYZER } from "./cfn-resource-types/aws-accessanalyzer-analyzer";
import { _AWS_ACMPCA_CERTIFICATE } from "./cfn-resource-types/aws-acmpca-certificate";
import { _AWS_ACMPCA_CERTIFICATEAUTHORITY } from "./cfn-resource-types/aws-acmpca-certificateauthority";
import { _AWS_ACMPCA_CERTIFICATEAUTHORITYACTIVATION } from "./cfn-resource-types/aws-acmpca-certificateauthorityactivation";
import { _AWS_ACMPCA_PERMISSION } from "./cfn-resource-types/aws-acmpca-permission";
import { _AWS_AMAZONMQ_BROKER } from "./cfn-resource-types/aws-amazonmq-broker";
import { _AWS_AMAZONMQ_CONFIGURATION } from "./cfn-resource-types/aws-amazonmq-configuration";
import { _AWS_AMAZONMQ_CONFIGURATIONASSOCIATION } from "./cfn-resource-types/aws-amazonmq-configurationassociation";
import { _AWS_AMPLIFY_APP } from "./cfn-resource-types/aws-amplify-app";
import { _AWS_AMPLIFY_BRANCH } from "./cfn-resource-types/aws-amplify-branch";
import { _AWS_AMPLIFY_DOMAIN } from "./cfn-resource-types/aws-amplify-domain";
import { _AWS_AMPLIFYUIBUILDER_COMPONENT } from "./cfn-resource-types/aws-amplifyuibuilder-component";
import { _AWS_AMPLIFYUIBUILDER_FORM } from "./cfn-resource-types/aws-amplifyuibuilder-form";
import { _AWS_AMPLIFYUIBUILDER_THEME } from "./cfn-resource-types/aws-amplifyuibuilder-theme";
import { _AWS_APIGATEWAY_ACCOUNT } from "./cfn-resource-types/aws-apigateway-account";
import { _AWS_APIGATEWAY_APIKEY } from "./cfn-resource-types/aws-apigateway-apikey";
import { _AWS_APIGATEWAY_AUTHORIZER } from "./cfn-resource-types/aws-apigateway-authorizer";
import { _AWS_APIGATEWAY_BASEPATHMAPPING } from "./cfn-resource-types/aws-apigateway-basepathmapping";
import { _AWS_APIGATEWAY_CLIENTCERTIFICATE } from "./cfn-resource-types/aws-apigateway-clientcertificate";
import { _AWS_APIGATEWAY_DEPLOYMENT } from "./cfn-resource-types/aws-apigateway-deployment";
import { _AWS_APIGATEWAY_DOCUMENTATIONPART } from "./cfn-resource-types/aws-apigateway-documentationpart";
import { _AWS_APIGATEWAY_DOCUMENTATIONVERSION } from "./cfn-resource-types/aws-apigateway-documentationversion";
import { _AWS_APIGATEWAY_DOMAINNAME } from "./cfn-resource-types/aws-apigateway-domainname";
import { _AWS_APIGATEWAY_GATEWAYRESPONSE } from "./cfn-resource-types/aws-apigateway-gatewayresponse";
import { _AWS_APIGATEWAY_METHOD } from "./cfn-resource-types/aws-apigateway-method";
import { _AWS_APIGATEWAY_MODEL } from "./cfn-resource-types/aws-apigateway-model";
import { _AWS_APIGATEWAY_REQUESTVALIDATOR } from "./cfn-resource-types/aws-apigateway-requestvalidator";
import { _AWS_APIGATEWAY_RESOURCE } from "./cfn-resource-types/aws-apigateway-resource";
import { _AWS_APIGATEWAY_RESTAPI } from "./cfn-resource-types/aws-apigateway-restapi";
import { _AWS_APIGATEWAY_STAGE } from "./cfn-resource-types/aws-apigateway-stage";
import { _AWS_APIGATEWAY_USAGEPLAN } from "./cfn-resource-types/aws-apigateway-usageplan";
import { _AWS_APIGATEWAY_USAGEPLANKEY } from "./cfn-resource-types/aws-apigateway-usageplankey";
import { _AWS_APIGATEWAY_VPCLINK } from "./cfn-resource-types/aws-apigateway-vpclink";
import { _AWS_APIGATEWAYV2_API } from "./cfn-resource-types/aws-apigatewayv2-api";
import { _AWS_APIGATEWAYV2_APIGATEWAYMANAGEDOVERRIDES } from "./cfn-resource-types/aws-apigatewayv2-apigatewaymanagedoverrides";
import { _AWS_APIGATEWAYV2_APIMAPPING } from "./cfn-resource-types/aws-apigatewayv2-apimapping";
import { _AWS_APIGATEWAYV2_AUTHORIZER } from "./cfn-resource-types/aws-apigatewayv2-authorizer";
import { _AWS_APIGATEWAYV2_DEPLOYMENT } from "./cfn-resource-types/aws-apigatewayv2-deployment";
import { _AWS_APIGATEWAYV2_DOMAINNAME } from "./cfn-resource-types/aws-apigatewayv2-domainname";
import { _AWS_APIGATEWAYV2_INTEGRATION } from "./cfn-resource-types/aws-apigatewayv2-integration";
import { _AWS_APIGATEWAYV2_INTEGRATIONRESPONSE } from "./cfn-resource-types/aws-apigatewayv2-integrationresponse";
import { _AWS_APIGATEWAYV2_MODEL } from "./cfn-resource-types/aws-apigatewayv2-model";
import { _AWS_APIGATEWAYV2_ROUTE } from "./cfn-resource-types/aws-apigatewayv2-route";
import { _AWS_APIGATEWAYV2_ROUTERESPONSE } from "./cfn-resource-types/aws-apigatewayv2-routeresponse";
import { _AWS_APIGATEWAYV2_STAGE } from "./cfn-resource-types/aws-apigatewayv2-stage";
import { _AWS_APIGATEWAYV2_VPCLINK } from "./cfn-resource-types/aws-apigatewayv2-vpclink";
import { _AWS_APPCONFIG_APPLICATION } from "./cfn-resource-types/aws-appconfig-application";
import { _AWS_APPCONFIG_CONFIGURATIONPROFILE } from "./cfn-resource-types/aws-appconfig-configurationprofile";
import { _AWS_APPCONFIG_DEPLOYMENT } from "./cfn-resource-types/aws-appconfig-deployment";
import { _AWS_APPCONFIG_DEPLOYMENTSTRATEGY } from "./cfn-resource-types/aws-appconfig-deploymentstrategy";
import { _AWS_APPCONFIG_ENVIRONMENT } from "./cfn-resource-types/aws-appconfig-environment";
import { _AWS_APPCONFIG_EXTENSION } from "./cfn-resource-types/aws-appconfig-extension";
import { _AWS_APPCONFIG_EXTENSIONASSOCIATION } from "./cfn-resource-types/aws-appconfig-extensionassociation";
import { _AWS_APPCONFIG_HOSTEDCONFIGURATIONVERSION } from "./cfn-resource-types/aws-appconfig-hostedconfigurationversion";
import { _AWS_APPFLOW_CONNECTOR } from "./cfn-resource-types/aws-appflow-connector";
import { _AWS_APPFLOW_CONNECTORPROFILE } from "./cfn-resource-types/aws-appflow-connectorprofile";
import { _AWS_APPFLOW_FLOW } from "./cfn-resource-types/aws-appflow-flow";
import { _AWS_APPINTEGRATIONS_APPLICATION } from "./cfn-resource-types/aws-appintegrations-application";
import { _AWS_APPINTEGRATIONS_DATAINTEGRATION } from "./cfn-resource-types/aws-appintegrations-dataintegration";
import { _AWS_APPINTEGRATIONS_EVENTINTEGRATION } from "./cfn-resource-types/aws-appintegrations-eventintegration";
import { _AWS_APPLICATIONAUTOSCALING_SCALABLETARGET } from "./cfn-resource-types/aws-applicationautoscaling-scalabletarget";
import { _AWS_APPLICATIONAUTOSCALING_SCALINGPOLICY } from "./cfn-resource-types/aws-applicationautoscaling-scalingpolicy";
import { _AWS_APPLICATIONINSIGHTS_APPLICATION } from "./cfn-resource-types/aws-applicationinsights-application";
import { _AWS_APPLICATIONSIGNALS_SERVICELEVELOBJECTIVE } from "./cfn-resource-types/aws-applicationsignals-servicelevelobjective";
import { _AWS_APPMESH_GATEWAYROUTE } from "./cfn-resource-types/aws-appmesh-gatewayroute";
import { _AWS_APPMESH_MESH } from "./cfn-resource-types/aws-appmesh-mesh";
import { _AWS_APPMESH_ROUTE } from "./cfn-resource-types/aws-appmesh-route";
import { _AWS_APPMESH_VIRTUALGATEWAY } from "./cfn-resource-types/aws-appmesh-virtualgateway";
import { _AWS_APPMESH_VIRTUALNODE } from "./cfn-resource-types/aws-appmesh-virtualnode";
import { _AWS_APPMESH_VIRTUALROUTER } from "./cfn-resource-types/aws-appmesh-virtualrouter";
import { _AWS_APPMESH_VIRTUALSERVICE } from "./cfn-resource-types/aws-appmesh-virtualservice";
import { _AWS_APPRUNNER_AUTOSCALINGCONFIGURATION } from "./cfn-resource-types/aws-apprunner-autoscalingconfiguration";
import { _AWS_APPRUNNER_OBSERVABILITYCONFIGURATION } from "./cfn-resource-types/aws-apprunner-observabilityconfiguration";
import { _AWS_APPRUNNER_SERVICE } from "./cfn-resource-types/aws-apprunner-service";
import { _AWS_APPRUNNER_VPCCONNECTOR } from "./cfn-resource-types/aws-apprunner-vpcconnector";
import { _AWS_APPRUNNER_VPCINGRESSCONNECTION } from "./cfn-resource-types/aws-apprunner-vpcingressconnection";
import { _AWS_APPSTREAM_APPBLOCK } from "./cfn-resource-types/aws-appstream-appblock";
import { _AWS_APPSTREAM_APPBLOCKBUILDER } from "./cfn-resource-types/aws-appstream-appblockbuilder";
import { _AWS_APPSTREAM_APPLICATION } from "./cfn-resource-types/aws-appstream-application";
import { _AWS_APPSTREAM_APPLICATIONENTITLEMENTASSOCIATION } from "./cfn-resource-types/aws-appstream-applicationentitlementassociation";
import { _AWS_APPSTREAM_APPLICATIONFLEETASSOCIATION } from "./cfn-resource-types/aws-appstream-applicationfleetassociation";
import { _AWS_APPSTREAM_DIRECTORYCONFIG } from "./cfn-resource-types/aws-appstream-directoryconfig";
import { _AWS_APPSTREAM_ENTITLEMENT } from "./cfn-resource-types/aws-appstream-entitlement";
import { _AWS_APPSTREAM_FLEET } from "./cfn-resource-types/aws-appstream-fleet";
import { _AWS_APPSTREAM_IMAGEBUILDER } from "./cfn-resource-types/aws-appstream-imagebuilder";
import { _AWS_APPSTREAM_STACK } from "./cfn-resource-types/aws-appstream-stack";
import { _AWS_APPSTREAM_STACKFLEETASSOCIATION } from "./cfn-resource-types/aws-appstream-stackfleetassociation";
import { _AWS_APPSTREAM_STACKUSERASSOCIATION } from "./cfn-resource-types/aws-appstream-stackuserassociation";
import { _AWS_APPSTREAM_USER } from "./cfn-resource-types/aws-appstream-user";
import { _AWS_APPSYNC_APICACHE } from "./cfn-resource-types/aws-appsync-apicache";
import { _AWS_APPSYNC_APIKEY } from "./cfn-resource-types/aws-appsync-apikey";
import { _AWS_APPSYNC_DATASOURCE } from "./cfn-resource-types/aws-appsync-datasource";
import { _AWS_APPSYNC_DOMAINNAME } from "./cfn-resource-types/aws-appsync-domainname";
import { _AWS_APPSYNC_DOMAINNAMEAPIASSOCIATION } from "./cfn-resource-types/aws-appsync-domainnameapiassociation";
import { _AWS_APPSYNC_FUNCTIONCONFIGURATION } from "./cfn-resource-types/aws-appsync-functionconfiguration";
import { _AWS_APPSYNC_GRAPHQLAPI } from "./cfn-resource-types/aws-appsync-graphqlapi";
import { _AWS_APPSYNC_GRAPHQLSCHEMA } from "./cfn-resource-types/aws-appsync-graphqlschema";
import { _AWS_APPSYNC_RESOLVER } from "./cfn-resource-types/aws-appsync-resolver";
import { _AWS_APPSYNC_SOURCEAPIASSOCIATION } from "./cfn-resource-types/aws-appsync-sourceapiassociation";
import { _AWS_APPTEST_TESTCASE } from "./cfn-resource-types/aws-apptest-testcase";
import { _AWS_APS_RULEGROUPSNAMESPACE } from "./cfn-resource-types/aws-aps-rulegroupsnamespace";
import { _AWS_APS_SCRAPER } from "./cfn-resource-types/aws-aps-scraper";
import { _AWS_APS_WORKSPACE } from "./cfn-resource-types/aws-aps-workspace";
import { _AWS_ARCZONALSHIFT_AUTOSHIFTOBSERVERNOTIFICATIONSTATUS } from "./cfn-resource-types/aws-arczonalshift-autoshiftobservernotificationstatus";
import { _AWS_ARCZONALSHIFT_ZONALAUTOSHIFTCONFIGURATION } from "./cfn-resource-types/aws-arczonalshift-zonalautoshiftconfiguration";
import { _AWS_ATHENA_CAPACITYRESERVATION } from "./cfn-resource-types/aws-athena-capacityreservation";
import { _AWS_ATHENA_DATACATALOG } from "./cfn-resource-types/aws-athena-datacatalog";
import { _AWS_ATHENA_NAMEDQUERY } from "./cfn-resource-types/aws-athena-namedquery";
import { _AWS_ATHENA_PREPAREDSTATEMENT } from "./cfn-resource-types/aws-athena-preparedstatement";
import { _AWS_ATHENA_WORKGROUP } from "./cfn-resource-types/aws-athena-workgroup";
import { _AWS_AUDITMANAGER_ASSESSMENT } from "./cfn-resource-types/aws-auditmanager-assessment";
import { _AWS_AUTOSCALING_AUTOSCALINGGROUP } from "./cfn-resource-types/aws-autoscaling-autoscalinggroup";
import { _AWS_AUTOSCALING_LAUNCHCONFIGURATION } from "./cfn-resource-types/aws-autoscaling-launchconfiguration";
import { _AWS_AUTOSCALING_LIFECYCLEHOOK } from "./cfn-resource-types/aws-autoscaling-lifecyclehook";
import { _AWS_AUTOSCALING_SCALINGPOLICY } from "./cfn-resource-types/aws-autoscaling-scalingpolicy";
import { _AWS_AUTOSCALING_SCHEDULEDACTION } from "./cfn-resource-types/aws-autoscaling-scheduledaction";
import { _AWS_AUTOSCALING_WARMPOOL } from "./cfn-resource-types/aws-autoscaling-warmpool";
import { _AWS_AUTOSCALINGPLANS_SCALINGPLAN } from "./cfn-resource-types/aws-autoscalingplans-scalingplan";
import { _AWS_B2BI_CAPABILITY } from "./cfn-resource-types/aws-b2bi-capability";
import { _AWS_B2BI_PARTNERSHIP } from "./cfn-resource-types/aws-b2bi-partnership";
import { _AWS_B2BI_PROFILE } from "./cfn-resource-types/aws-b2bi-profile";
import { _AWS_B2BI_TRANSFORMER } from "./cfn-resource-types/aws-b2bi-transformer";
import { _AWS_BACKUP_BACKUPPLAN } from "./cfn-resource-types/aws-backup-backupplan";
import { _AWS_BACKUP_BACKUPSELECTION } from "./cfn-resource-types/aws-backup-backupselection";
import { _AWS_BACKUP_BACKUPVAULT } from "./cfn-resource-types/aws-backup-backupvault";
import { _AWS_BACKUP_FRAMEWORK } from "./cfn-resource-types/aws-backup-framework";
import { _AWS_BACKUP_REPORTPLAN } from "./cfn-resource-types/aws-backup-reportplan";
import { _AWS_BACKUP_RESTORETESTINGPLAN } from "./cfn-resource-types/aws-backup-restoretestingplan";
import { _AWS_BACKUP_RESTORETESTINGSELECTION } from "./cfn-resource-types/aws-backup-restoretestingselection";
import { _AWS_BACKUPGATEWAY_HYPERVISOR } from "./cfn-resource-types/aws-backupgateway-hypervisor";
import { _AWS_BATCH_COMPUTEENVIRONMENT } from "./cfn-resource-types/aws-batch-computeenvironment";
import { _AWS_BATCH_JOBDEFINITION } from "./cfn-resource-types/aws-batch-jobdefinition";
import { _AWS_BATCH_JOBQUEUE } from "./cfn-resource-types/aws-batch-jobqueue";
import { _AWS_BATCH_SCHEDULINGPOLICY } from "./cfn-resource-types/aws-batch-schedulingpolicy";
import { _AWS_BCMDATAEXPORTS_EXPORT } from "./cfn-resource-types/aws-bcmdataexports-export";
import { _AWS_BEDROCK_AGENT } from "./cfn-resource-types/aws-bedrock-agent";
import { _AWS_BEDROCK_AGENTALIAS } from "./cfn-resource-types/aws-bedrock-agentalias";
import { _AWS_BEDROCK_DATASOURCE } from "./cfn-resource-types/aws-bedrock-datasource";
import { _AWS_BEDROCK_FLOW } from "./cfn-resource-types/aws-bedrock-flow";
import { _AWS_BEDROCK_FLOWALIAS } from "./cfn-resource-types/aws-bedrock-flowalias";
import { _AWS_BEDROCK_FLOWVERSION } from "./cfn-resource-types/aws-bedrock-flowversion";
import { _AWS_BEDROCK_GUARDRAIL } from "./cfn-resource-types/aws-bedrock-guardrail";
import { _AWS_BEDROCK_GUARDRAILVERSION } from "./cfn-resource-types/aws-bedrock-guardrailversion";
import { _AWS_BEDROCK_KNOWLEDGEBASE } from "./cfn-resource-types/aws-bedrock-knowledgebase";
import { _AWS_BEDROCK_PROMPT } from "./cfn-resource-types/aws-bedrock-prompt";
import { _AWS_BEDROCK_PROMPTVERSION } from "./cfn-resource-types/aws-bedrock-promptversion";
import { _AWS_BILLINGCONDUCTOR_BILLINGGROUP } from "./cfn-resource-types/aws-billingconductor-billinggroup";
import { _AWS_BILLINGCONDUCTOR_CUSTOMLINEITEM } from "./cfn-resource-types/aws-billingconductor-customlineitem";
import { _AWS_BILLINGCONDUCTOR_PRICINGPLAN } from "./cfn-resource-types/aws-billingconductor-pricingplan";
import { _AWS_BILLINGCONDUCTOR_PRICINGRULE } from "./cfn-resource-types/aws-billingconductor-pricingrule";
import { _AWS_BUDGETS_BUDGET } from "./cfn-resource-types/aws-budgets-budget";
import { _AWS_BUDGETS_BUDGETSACTION } from "./cfn-resource-types/aws-budgets-budgetsaction";
import { _AWS_CASSANDRA_KEYSPACE } from "./cfn-resource-types/aws-cassandra-keyspace";
import { _AWS_CASSANDRA_TABLE } from "./cfn-resource-types/aws-cassandra-table";
import { _AWS_CE_ANOMALYMONITOR } from "./cfn-resource-types/aws-ce-anomalymonitor";
import { _AWS_CE_ANOMALYSUBSCRIPTION } from "./cfn-resource-types/aws-ce-anomalysubscription";
import { _AWS_CE_COSTCATEGORY } from "./cfn-resource-types/aws-ce-costcategory";
import { _AWS_CERTIFICATEMANAGER_ACCOUNT } from "./cfn-resource-types/aws-certificatemanager-account";
import { _AWS_CERTIFICATEMANAGER_CERTIFICATE } from "./cfn-resource-types/aws-certificatemanager-certificate";
import { _AWS_CHATBOT_MICROSOFTTEAMSCHANNELCONFIGURATION } from "./cfn-resource-types/aws-chatbot-microsoftteamschannelconfiguration";
import { _AWS_CHATBOT_SLACKCHANNELCONFIGURATION } from "./cfn-resource-types/aws-chatbot-slackchannelconfiguration";
import { _AWS_CLEANROOMS_ANALYSISTEMPLATE } from "./cfn-resource-types/aws-cleanrooms-analysistemplate";
import { _AWS_CLEANROOMS_COLLABORATION } from "./cfn-resource-types/aws-cleanrooms-collaboration";
import { _AWS_CLEANROOMS_CONFIGUREDTABLE } from "./cfn-resource-types/aws-cleanrooms-configuredtable";
import { _AWS_CLEANROOMS_CONFIGUREDTABLEASSOCIATION } from "./cfn-resource-types/aws-cleanrooms-configuredtableassociation";
import { _AWS_CLEANROOMS_IDMAPPINGTABLE } from "./cfn-resource-types/aws-cleanrooms-idmappingtable";
import { _AWS_CLEANROOMS_IDNAMESPACEASSOCIATION } from "./cfn-resource-types/aws-cleanrooms-idnamespaceassociation";
import { _AWS_CLEANROOMS_MEMBERSHIP } from "./cfn-resource-types/aws-cleanrooms-membership";
import { _AWS_CLEANROOMS_PRIVACYBUDGETTEMPLATE } from "./cfn-resource-types/aws-cleanrooms-privacybudgettemplate";
import { _AWS_CLEANROOMSML_TRAININGDATASET } from "./cfn-resource-types/aws-cleanroomsml-trainingdataset";
import { _AWS_CLOUD9_ENVIRONMENTEC2 } from "./cfn-resource-types/aws-cloud9-environmentec2";
import { _AWS_CLOUDFORMATION_CUSTOMRESOURCE } from "./cfn-resource-types/aws-cloudformation-customresource";
import { _AWS_CLOUDFORMATION_HOOKDEFAULTVERSION } from "./cfn-resource-types/aws-cloudformation-hookdefaultversion";
import { _AWS_CLOUDFORMATION_HOOKTYPECONFIG } from "./cfn-resource-types/aws-cloudformation-hooktypeconfig";
import { _AWS_CLOUDFORMATION_HOOKVERSION } from "./cfn-resource-types/aws-cloudformation-hookversion";
import { _AWS_CLOUDFORMATION_MACRO } from "./cfn-resource-types/aws-cloudformation-macro";
import { _AWS_CLOUDFORMATION_MODULEDEFAULTVERSION } from "./cfn-resource-types/aws-cloudformation-moduledefaultversion";
import { _AWS_CLOUDFORMATION_MODULEVERSION } from "./cfn-resource-types/aws-cloudformation-moduleversion";
import { _AWS_CLOUDFORMATION_PUBLICTYPEVERSION } from "./cfn-resource-types/aws-cloudformation-publictypeversion";
import { _AWS_CLOUDFORMATION_PUBLISHER } from "./cfn-resource-types/aws-cloudformation-publisher";
import { _AWS_CLOUDFORMATION_RESOURCEDEFAULTVERSION } from "./cfn-resource-types/aws-cloudformation-resourcedefaultversion";
import { _AWS_CLOUDFORMATION_RESOURCEVERSION } from "./cfn-resource-types/aws-cloudformation-resourceversion";
import { _AWS_CLOUDFORMATION_STACK } from "./cfn-resource-types/aws-cloudformation-stack";
import { _AWS_CLOUDFORMATION_STACKSET } from "./cfn-resource-types/aws-cloudformation-stackset";
import { _AWS_CLOUDFORMATION_TYPEACTIVATION } from "./cfn-resource-types/aws-cloudformation-typeactivation";
import { _AWS_CLOUDFORMATION_WAITCONDITION } from "./cfn-resource-types/aws-cloudformation-waitcondition";
import { _AWS_CLOUDFORMATION_WAITCONDITIONHANDLE } from "./cfn-resource-types/aws-cloudformation-waitconditionhandle";
import { _AWS_CLOUDFRONT_CACHEPOLICY } from "./cfn-resource-types/aws-cloudfront-cachepolicy";
import { _AWS_CLOUDFRONT_CLOUDFRONTORIGINACCESSIDENTITY } from "./cfn-resource-types/aws-cloudfront-cloudfrontoriginaccessidentity";
import { _AWS_CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY } from "./cfn-resource-types/aws-cloudfront-continuousdeploymentpolicy";
import { _AWS_CLOUDFRONT_DISTRIBUTION } from "./cfn-resource-types/aws-cloudfront-distribution";
import { _AWS_CLOUDFRONT_FUNCTION } from "./cfn-resource-types/aws-cloudfront-function";
import { _AWS_CLOUDFRONT_KEYGROUP } from "./cfn-resource-types/aws-cloudfront-keygroup";
import { _AWS_CLOUDFRONT_KEYVALUESTORE } from "./cfn-resource-types/aws-cloudfront-keyvaluestore";
import { _AWS_CLOUDFRONT_MONITORINGSUBSCRIPTION } from "./cfn-resource-types/aws-cloudfront-monitoringsubscription";
import { _AWS_CLOUDFRONT_ORIGINACCESSCONTROL } from "./cfn-resource-types/aws-cloudfront-originaccesscontrol";
import { _AWS_CLOUDFRONT_ORIGINREQUESTPOLICY } from "./cfn-resource-types/aws-cloudfront-originrequestpolicy";
import { _AWS_CLOUDFRONT_PUBLICKEY } from "./cfn-resource-types/aws-cloudfront-publickey";
import { _AWS_CLOUDFRONT_REALTIMELOGCONFIG } from "./cfn-resource-types/aws-cloudfront-realtimelogconfig";
import { _AWS_CLOUDFRONT_RESPONSEHEADERSPOLICY } from "./cfn-resource-types/aws-cloudfront-responseheaderspolicy";
import { _AWS_CLOUDFRONT_STREAMINGDISTRIBUTION } from "./cfn-resource-types/aws-cloudfront-streamingdistribution";
import { _AWS_CLOUDTRAIL_CHANNEL } from "./cfn-resource-types/aws-cloudtrail-channel";
import { _AWS_CLOUDTRAIL_EVENTDATASTORE } from "./cfn-resource-types/aws-cloudtrail-eventdatastore";
import { _AWS_CLOUDTRAIL_RESOURCEPOLICY } from "./cfn-resource-types/aws-cloudtrail-resourcepolicy";
import { _AWS_CLOUDTRAIL_TRAIL } from "./cfn-resource-types/aws-cloudtrail-trail";
import { _AWS_CLOUDWATCH_ALARM } from "./cfn-resource-types/aws-cloudwatch-alarm";
import { _AWS_CLOUDWATCH_ANOMALYDETECTOR } from "./cfn-resource-types/aws-cloudwatch-anomalydetector";
import { _AWS_CLOUDWATCH_COMPOSITEALARM } from "./cfn-resource-types/aws-cloudwatch-compositealarm";
import { _AWS_CLOUDWATCH_DASHBOARD } from "./cfn-resource-types/aws-cloudwatch-dashboard";
import { _AWS_CLOUDWATCH_INSIGHTRULE } from "./cfn-resource-types/aws-cloudwatch-insightrule";
import { _AWS_CODEARTIFACT_DOMAIN } from "./cfn-resource-types/aws-codeartifact-domain";
import { _AWS_CODEARTIFACT_PACKAGEGROUP } from "./cfn-resource-types/aws-codeartifact-packagegroup";
import { _AWS_CODEARTIFACT_REPOSITORY } from "./cfn-resource-types/aws-codeartifact-repository";
import { _AWS_CODEBUILD_FLEET } from "./cfn-resource-types/aws-codebuild-fleet";
import { _AWS_CODEBUILD_PROJECT } from "./cfn-resource-types/aws-codebuild-project";
import { _AWS_CODEBUILD_REPORTGROUP } from "./cfn-resource-types/aws-codebuild-reportgroup";
import { _AWS_CODEBUILD_SOURCECREDENTIAL } from "./cfn-resource-types/aws-codebuild-sourcecredential";
import { _AWS_CODECOMMIT_REPOSITORY } from "./cfn-resource-types/aws-codecommit-repository";
import { _AWS_CODECONNECTIONS_CONNECTION } from "./cfn-resource-types/aws-codeconnections-connection";
import { _AWS_CODEDEPLOY_APPLICATION } from "./cfn-resource-types/aws-codedeploy-application";
import { _AWS_CODEDEPLOY_DEPLOYMENTCONFIG } from "./cfn-resource-types/aws-codedeploy-deploymentconfig";
import { _AWS_CODEDEPLOY_DEPLOYMENTGROUP } from "./cfn-resource-types/aws-codedeploy-deploymentgroup";
import { _AWS_CODEGURUPROFILER_PROFILINGGROUP } from "./cfn-resource-types/aws-codeguruprofiler-profilinggroup";
import { _AWS_CODEGURUREVIEWER_REPOSITORYASSOCIATION } from "./cfn-resource-types/aws-codegurureviewer-repositoryassociation";
import { _AWS_CODEPIPELINE_CUSTOMACTIONTYPE } from "./cfn-resource-types/aws-codepipeline-customactiontype";
import { _AWS_CODEPIPELINE_PIPELINE } from "./cfn-resource-types/aws-codepipeline-pipeline";
import { _AWS_CODEPIPELINE_WEBHOOK } from "./cfn-resource-types/aws-codepipeline-webhook";
import { _AWS_CODESTAR_GITHUBREPOSITORY } from "./cfn-resource-types/aws-codestar-githubrepository";
import { _AWS_CODESTARCONNECTIONS_CONNECTION } from "./cfn-resource-types/aws-codestarconnections-connection";
import { _AWS_CODESTARCONNECTIONS_REPOSITORYLINK } from "./cfn-resource-types/aws-codestarconnections-repositorylink";
import { _AWS_CODESTARCONNECTIONS_SYNCCONFIGURATION } from "./cfn-resource-types/aws-codestarconnections-syncconfiguration";
import { _AWS_CODESTARNOTIFICATIONS_NOTIFICATIONRULE } from "./cfn-resource-types/aws-codestarnotifications-notificationrule";
import { _AWS_COGNITO_IDENTITYPOOL } from "./cfn-resource-types/aws-cognito-identitypool";
import { _AWS_COGNITO_IDENTITYPOOLPRINCIPALTAG } from "./cfn-resource-types/aws-cognito-identitypoolprincipaltag";
import { _AWS_COGNITO_IDENTITYPOOLROLEATTACHMENT } from "./cfn-resource-types/aws-cognito-identitypoolroleattachment";
import { _AWS_COGNITO_LOGDELIVERYCONFIGURATION } from "./cfn-resource-types/aws-cognito-logdeliveryconfiguration";
import { _AWS_COGNITO_USERPOOL } from "./cfn-resource-types/aws-cognito-userpool";
import { _AWS_COGNITO_USERPOOLCLIENT } from "./cfn-resource-types/aws-cognito-userpoolclient";
import { _AWS_COGNITO_USERPOOLDOMAIN } from "./cfn-resource-types/aws-cognito-userpooldomain";
import { _AWS_COGNITO_USERPOOLGROUP } from "./cfn-resource-types/aws-cognito-userpoolgroup";
import { _AWS_COGNITO_USERPOOLIDENTITYPROVIDER } from "./cfn-resource-types/aws-cognito-userpoolidentityprovider";
import { _AWS_COGNITO_USERPOOLRESOURCESERVER } from "./cfn-resource-types/aws-cognito-userpoolresourceserver";
import { _AWS_COGNITO_USERPOOLRISKCONFIGURATIONATTACHMENT } from "./cfn-resource-types/aws-cognito-userpoolriskconfigurationattachment";
import { _AWS_COGNITO_USERPOOLUICUSTOMIZATIONATTACHMENT } from "./cfn-resource-types/aws-cognito-userpooluicustomizationattachment";
import { _AWS_COGNITO_USERPOOLUSER } from "./cfn-resource-types/aws-cognito-userpooluser";
import { _AWS_COGNITO_USERPOOLUSERTOGROUPATTACHMENT } from "./cfn-resource-types/aws-cognito-userpoolusertogroupattachment";
import { _AWS_COMPREHEND_DOCUMENTCLASSIFIER } from "./cfn-resource-types/aws-comprehend-documentclassifier";
import { _AWS_COMPREHEND_FLYWHEEL } from "./cfn-resource-types/aws-comprehend-flywheel";
import { _AWS_CONFIG_AGGREGATIONAUTHORIZATION } from "./cfn-resource-types/aws-config-aggregationauthorization";
import { _AWS_CONFIG_CONFIGRULE } from "./cfn-resource-types/aws-config-configrule";
import { _AWS_CONFIG_CONFIGURATIONAGGREGATOR } from "./cfn-resource-types/aws-config-configurationaggregator";
import { _AWS_CONFIG_CONFIGURATIONRECORDER } from "./cfn-resource-types/aws-config-configurationrecorder";
import { _AWS_CONFIG_CONFORMANCEPACK } from "./cfn-resource-types/aws-config-conformancepack";
import { _AWS_CONFIG_DELIVERYCHANNEL } from "./cfn-resource-types/aws-config-deliverychannel";
import { _AWS_CONFIG_ORGANIZATIONCONFIGRULE } from "./cfn-resource-types/aws-config-organizationconfigrule";
import { _AWS_CONFIG_ORGANIZATIONCONFORMANCEPACK } from "./cfn-resource-types/aws-config-organizationconformancepack";
import { _AWS_CONFIG_REMEDIATIONCONFIGURATION } from "./cfn-resource-types/aws-config-remediationconfiguration";
import { _AWS_CONFIG_STOREDQUERY } from "./cfn-resource-types/aws-config-storedquery";
import { _AWS_CONNECT_AGENTSTATUS } from "./cfn-resource-types/aws-connect-agentstatus";
import { _AWS_CONNECT_APPROVEDORIGIN } from "./cfn-resource-types/aws-connect-approvedorigin";
import { _AWS_CONNECT_CONTACTFLOW } from "./cfn-resource-types/aws-connect-contactflow";
import { _AWS_CONNECT_CONTACTFLOWMODULE } from "./cfn-resource-types/aws-connect-contactflowmodule";
import { _AWS_CONNECT_EVALUATIONFORM } from "./cfn-resource-types/aws-connect-evaluationform";
import { _AWS_CONNECT_HOURSOFOPERATION } from "./cfn-resource-types/aws-connect-hoursofoperation";
import { _AWS_CONNECT_INSTANCE } from "./cfn-resource-types/aws-connect-instance";
import { _AWS_CONNECT_INSTANCESTORAGECONFIG } from "./cfn-resource-types/aws-connect-instancestorageconfig";
import { _AWS_CONNECT_INTEGRATIONASSOCIATION } from "./cfn-resource-types/aws-connect-integrationassociation";
import { _AWS_CONNECT_PHONENUMBER } from "./cfn-resource-types/aws-connect-phonenumber";
import { _AWS_CONNECT_PREDEFINEDATTRIBUTE } from "./cfn-resource-types/aws-connect-predefinedattribute";
import { _AWS_CONNECT_PROMPT } from "./cfn-resource-types/aws-connect-prompt";
import { _AWS_CONNECT_QUEUE } from "./cfn-resource-types/aws-connect-queue";
import { _AWS_CONNECT_QUICKCONNECT } from "./cfn-resource-types/aws-connect-quickconnect";
import { _AWS_CONNECT_ROUTINGPROFILE } from "./cfn-resource-types/aws-connect-routingprofile";
import { _AWS_CONNECT_RULE } from "./cfn-resource-types/aws-connect-rule";
import { _AWS_CONNECT_SECURITYKEY } from "./cfn-resource-types/aws-connect-securitykey";
import { _AWS_CONNECT_SECURITYPROFILE } from "./cfn-resource-types/aws-connect-securityprofile";
import { _AWS_CONNECT_TASKTEMPLATE } from "./cfn-resource-types/aws-connect-tasktemplate";
import { _AWS_CONNECT_TRAFFICDISTRIBUTIONGROUP } from "./cfn-resource-types/aws-connect-trafficdistributiongroup";
import { _AWS_CONNECT_USER } from "./cfn-resource-types/aws-connect-user";
import { _AWS_CONNECT_USERHIERARCHYGROUP } from "./cfn-resource-types/aws-connect-userhierarchygroup";
import { _AWS_CONNECT_USERHIERARCHYSTRUCTURE } from "./cfn-resource-types/aws-connect-userhierarchystructure";
import { _AWS_CONNECT_VIEW } from "./cfn-resource-types/aws-connect-view";
import { _AWS_CONNECT_VIEWVERSION } from "./cfn-resource-types/aws-connect-viewversion";
import { _AWS_CONNECTCAMPAIGNS_CAMPAIGN } from "./cfn-resource-types/aws-connectcampaigns-campaign";
import { _AWS_CONTROLTOWER_ENABLEDBASELINE } from "./cfn-resource-types/aws-controltower-enabledbaseline";
import { _AWS_CONTROLTOWER_ENABLEDCONTROL } from "./cfn-resource-types/aws-controltower-enabledcontrol";
import { _AWS_CONTROLTOWER_LANDINGZONE } from "./cfn-resource-types/aws-controltower-landingzone";
import { _AWS_CUR_REPORTDEFINITION } from "./cfn-resource-types/aws-cur-reportdefinition";
import { _AWS_CUSTOMERPROFILES_CALCULATEDATTRIBUTEDEFINITION } from "./cfn-resource-types/aws-customerprofiles-calculatedattributedefinition";
import { _AWS_CUSTOMERPROFILES_DOMAIN } from "./cfn-resource-types/aws-customerprofiles-domain";
import { _AWS_CUSTOMERPROFILES_EVENTSTREAM } from "./cfn-resource-types/aws-customerprofiles-eventstream";
import { _AWS_CUSTOMERPROFILES_INTEGRATION } from "./cfn-resource-types/aws-customerprofiles-integration";
import { _AWS_CUSTOMERPROFILES_OBJECTTYPE } from "./cfn-resource-types/aws-customerprofiles-objecttype";
import { _AWS_DATABREW_DATASET } from "./cfn-resource-types/aws-databrew-dataset";
import { _AWS_DATABREW_JOB } from "./cfn-resource-types/aws-databrew-job";
import { _AWS_DATABREW_PROJECT } from "./cfn-resource-types/aws-databrew-project";
import { _AWS_DATABREW_RECIPE } from "./cfn-resource-types/aws-databrew-recipe";
import { _AWS_DATABREW_RULESET } from "./cfn-resource-types/aws-databrew-ruleset";
import { _AWS_DATABREW_SCHEDULE } from "./cfn-resource-types/aws-databrew-schedule";
import { _AWS_DATAPIPELINE_PIPELINE } from "./cfn-resource-types/aws-datapipeline-pipeline";
import { _AWS_DATASYNC_AGENT } from "./cfn-resource-types/aws-datasync-agent";
import { _AWS_DATASYNC_LOCATIONAZUREBLOB } from "./cfn-resource-types/aws-datasync-locationazureblob";
import { _AWS_DATASYNC_LOCATIONEFS } from "./cfn-resource-types/aws-datasync-locationefs";
import { _AWS_DATASYNC_LOCATIONFSXLUSTRE } from "./cfn-resource-types/aws-datasync-locationfsxlustre";
import { _AWS_DATASYNC_LOCATIONFSXONTAP } from "./cfn-resource-types/aws-datasync-locationfsxontap";
import { _AWS_DATASYNC_LOCATIONFSXOPENZFS } from "./cfn-resource-types/aws-datasync-locationfsxopenzfs";
import { _AWS_DATASYNC_LOCATIONFSXWINDOWS } from "./cfn-resource-types/aws-datasync-locationfsxwindows";
import { _AWS_DATASYNC_LOCATIONHDFS } from "./cfn-resource-types/aws-datasync-locationhdfs";
import { _AWS_DATASYNC_LOCATIONNFS } from "./cfn-resource-types/aws-datasync-locationnfs";
import { _AWS_DATASYNC_LOCATIONOBJECTSTORAGE } from "./cfn-resource-types/aws-datasync-locationobjectstorage";
import { _AWS_DATASYNC_LOCATIONS3 } from "./cfn-resource-types/aws-datasync-locations3";
import { _AWS_DATASYNC_LOCATIONSMB } from "./cfn-resource-types/aws-datasync-locationsmb";
import { _AWS_DATASYNC_STORAGESYSTEM } from "./cfn-resource-types/aws-datasync-storagesystem";
import { _AWS_DATASYNC_TASK } from "./cfn-resource-types/aws-datasync-task";
import { _AWS_DATAZONE_DATASOURCE } from "./cfn-resource-types/aws-datazone-datasource";
import { _AWS_DATAZONE_DOMAIN } from "./cfn-resource-types/aws-datazone-domain";
import { _AWS_DATAZONE_ENVIRONMENT } from "./cfn-resource-types/aws-datazone-environment";
import { _AWS_DATAZONE_ENVIRONMENTACTIONS } from "./cfn-resource-types/aws-datazone-environmentactions";
import { _AWS_DATAZONE_ENVIRONMENTBLUEPRINTCONFIGURATION } from "./cfn-resource-types/aws-datazone-environmentblueprintconfiguration";
import { _AWS_DATAZONE_ENVIRONMENTPROFILE } from "./cfn-resource-types/aws-datazone-environmentprofile";
import { _AWS_DATAZONE_GROUPPROFILE } from "./cfn-resource-types/aws-datazone-groupprofile";
import { _AWS_DATAZONE_PROJECT } from "./cfn-resource-types/aws-datazone-project";
import { _AWS_DATAZONE_PROJECTMEMBERSHIP } from "./cfn-resource-types/aws-datazone-projectmembership";
import { _AWS_DATAZONE_SUBSCRIPTIONTARGET } from "./cfn-resource-types/aws-datazone-subscriptiontarget";
import { _AWS_DATAZONE_USERPROFILE } from "./cfn-resource-types/aws-datazone-userprofile";
import { _AWS_DAX_CLUSTER } from "./cfn-resource-types/aws-dax-cluster";
import { _AWS_DAX_PARAMETERGROUP } from "./cfn-resource-types/aws-dax-parametergroup";
import { _AWS_DAX_SUBNETGROUP } from "./cfn-resource-types/aws-dax-subnetgroup";
import { _AWS_DEADLINE_FARM } from "./cfn-resource-types/aws-deadline-farm";
import { _AWS_DEADLINE_FLEET } from "./cfn-resource-types/aws-deadline-fleet";
import { _AWS_DEADLINE_LICENSEENDPOINT } from "./cfn-resource-types/aws-deadline-licenseendpoint";
import { _AWS_DEADLINE_METEREDPRODUCT } from "./cfn-resource-types/aws-deadline-meteredproduct";
import { _AWS_DEADLINE_MONITOR } from "./cfn-resource-types/aws-deadline-monitor";
import { _AWS_DEADLINE_QUEUE } from "./cfn-resource-types/aws-deadline-queue";
import { _AWS_DEADLINE_QUEUEENVIRONMENT } from "./cfn-resource-types/aws-deadline-queueenvironment";
import { _AWS_DEADLINE_QUEUEFLEETASSOCIATION } from "./cfn-resource-types/aws-deadline-queuefleetassociation";
import { _AWS_DEADLINE_STORAGEPROFILE } from "./cfn-resource-types/aws-deadline-storageprofile";
import { _AWS_DETECTIVE_GRAPH } from "./cfn-resource-types/aws-detective-graph";
import { _AWS_DETECTIVE_MEMBERINVITATION } from "./cfn-resource-types/aws-detective-memberinvitation";
import { _AWS_DETECTIVE_ORGANIZATIONADMIN } from "./cfn-resource-types/aws-detective-organizationadmin";
import { _AWS_DEVOPSGURU_LOGANOMALYDETECTIONINTEGRATION } from "./cfn-resource-types/aws-devopsguru-loganomalydetectionintegration";
import { _AWS_DEVOPSGURU_NOTIFICATIONCHANNEL } from "./cfn-resource-types/aws-devopsguru-notificationchannel";
import { _AWS_DEVOPSGURU_RESOURCECOLLECTION } from "./cfn-resource-types/aws-devopsguru-resourcecollection";
import { _AWS_DIRECTORYSERVICE_MICROSOFTAD } from "./cfn-resource-types/aws-directoryservice-microsoftad";
import { _AWS_DIRECTORYSERVICE_SIMPLEAD } from "./cfn-resource-types/aws-directoryservice-simplead";
import { _AWS_DLM_LIFECYCLEPOLICY } from "./cfn-resource-types/aws-dlm-lifecyclepolicy";
import { _AWS_DMS_CERTIFICATE } from "./cfn-resource-types/aws-dms-certificate";
import { _AWS_DMS_DATAPROVIDER } from "./cfn-resource-types/aws-dms-dataprovider";
import { _AWS_DMS_ENDPOINT } from "./cfn-resource-types/aws-dms-endpoint";
import { _AWS_DMS_EVENTSUBSCRIPTION } from "./cfn-resource-types/aws-dms-eventsubscription";
import { _AWS_DMS_INSTANCEPROFILE } from "./cfn-resource-types/aws-dms-instanceprofile";
import { _AWS_DMS_MIGRATIONPROJECT } from "./cfn-resource-types/aws-dms-migrationproject";
import { _AWS_DMS_REPLICATIONCONFIG } from "./cfn-resource-types/aws-dms-replicationconfig";
import { _AWS_DMS_REPLICATIONINSTANCE } from "./cfn-resource-types/aws-dms-replicationinstance";
import { _AWS_DMS_REPLICATIONSUBNETGROUP } from "./cfn-resource-types/aws-dms-replicationsubnetgroup";
import { _AWS_DMS_REPLICATIONTASK } from "./cfn-resource-types/aws-dms-replicationtask";
import { _AWS_DOCDB_DBCLUSTER } from "./cfn-resource-types/aws-docdb-dbcluster";
import { _AWS_DOCDB_DBCLUSTERPARAMETERGROUP } from "./cfn-resource-types/aws-docdb-dbclusterparametergroup";
import { _AWS_DOCDB_DBINSTANCE } from "./cfn-resource-types/aws-docdb-dbinstance";
import { _AWS_DOCDB_DBSUBNETGROUP } from "./cfn-resource-types/aws-docdb-dbsubnetgroup";
import { _AWS_DOCDB_EVENTSUBSCRIPTION } from "./cfn-resource-types/aws-docdb-eventsubscription";
import { _AWS_DOCDBELASTIC_CLUSTER } from "./cfn-resource-types/aws-docdbelastic-cluster";
import { _AWS_DYNAMODB_GLOBALTABLE } from "./cfn-resource-types/aws-dynamodb-globaltable";
import { _AWS_DYNAMODB_TABLE } from "./cfn-resource-types/aws-dynamodb-table";
import { _AWS_EC2_CAPACITYRESERVATION } from "./cfn-resource-types/aws-ec2-capacityreservation";
import { _AWS_EC2_CAPACITYRESERVATIONFLEET } from "./cfn-resource-types/aws-ec2-capacityreservationfleet";
import { _AWS_EC2_CARRIERGATEWAY } from "./cfn-resource-types/aws-ec2-carriergateway";
import { _AWS_EC2_CLIENTVPNAUTHORIZATIONRULE } from "./cfn-resource-types/aws-ec2-clientvpnauthorizationrule";
import { _AWS_EC2_CLIENTVPNENDPOINT } from "./cfn-resource-types/aws-ec2-clientvpnendpoint";
import { _AWS_EC2_CLIENTVPNROUTE } from "./cfn-resource-types/aws-ec2-clientvpnroute";
import { _AWS_EC2_CLIENTVPNTARGETNETWORKASSOCIATION } from "./cfn-resource-types/aws-ec2-clientvpntargetnetworkassociation";
import { _AWS_EC2_CUSTOMERGATEWAY } from "./cfn-resource-types/aws-ec2-customergateway";
import { _AWS_EC2_DHCPOPTIONS } from "./cfn-resource-types/aws-ec2-dhcpoptions";
import { _AWS_EC2_EC2FLEET } from "./cfn-resource-types/aws-ec2-ec2fleet";
import { _AWS_EC2_EGRESSONLYINTERNETGATEWAY } from "./cfn-resource-types/aws-ec2-egressonlyinternetgateway";
import { _AWS_EC2_EIP } from "./cfn-resource-types/aws-ec2-eip";
import { _AWS_EC2_EIPASSOCIATION } from "./cfn-resource-types/aws-ec2-eipassociation";
import { _AWS_EC2_ENCLAVECERTIFICATEIAMROLEASSOCIATION } from "./cfn-resource-types/aws-ec2-enclavecertificateiamroleassociation";
import { _AWS_EC2_FLOWLOG } from "./cfn-resource-types/aws-ec2-flowlog";
import { _AWS_EC2_GATEWAYROUTETABLEASSOCIATION } from "./cfn-resource-types/aws-ec2-gatewayroutetableassociation";
import { _AWS_EC2_HOST } from "./cfn-resource-types/aws-ec2-host";
import { _AWS_EC2_INSTANCE } from "./cfn-resource-types/aws-ec2-instance";
import { _AWS_EC2_INSTANCECONNECTENDPOINT } from "./cfn-resource-types/aws-ec2-instanceconnectendpoint";
import { _AWS_EC2_INTERNETGATEWAY } from "./cfn-resource-types/aws-ec2-internetgateway";
import { _AWS_EC2_IPAM } from "./cfn-resource-types/aws-ec2-ipam";
import { _AWS_EC2_IPAMALLOCATION } from "./cfn-resource-types/aws-ec2-ipamallocation";
import { _AWS_EC2_IPAMPOOL } from "./cfn-resource-types/aws-ec2-ipampool";
import { _AWS_EC2_IPAMPOOLCIDR } from "./cfn-resource-types/aws-ec2-ipampoolcidr";
import { _AWS_EC2_IPAMRESOURCEDISCOVERY } from "./cfn-resource-types/aws-ec2-ipamresourcediscovery";
import { _AWS_EC2_IPAMRESOURCEDISCOVERYASSOCIATION } from "./cfn-resource-types/aws-ec2-ipamresourcediscoveryassociation";
import { _AWS_EC2_IPAMSCOPE } from "./cfn-resource-types/aws-ec2-ipamscope";
import { _AWS_EC2_KEYPAIR } from "./cfn-resource-types/aws-ec2-keypair";
import { _AWS_EC2_LAUNCHTEMPLATE } from "./cfn-resource-types/aws-ec2-launchtemplate";
import { _AWS_EC2_LOCALGATEWAYROUTE } from "./cfn-resource-types/aws-ec2-localgatewayroute";
import { _AWS_EC2_LOCALGATEWAYROUTETABLE } from "./cfn-resource-types/aws-ec2-localgatewayroutetable";
import { _AWS_EC2_LOCALGATEWAYROUTETABLEVIRTUALINTERFACEGROUPASSOCIATION } from "./cfn-resource-types/aws-ec2-localgatewayroutetablevirtualinterfacegroupassociation";
import { _AWS_EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION } from "./cfn-resource-types/aws-ec2-localgatewayroutetablevpcassociation";
import { _AWS_EC2_NATGATEWAY } from "./cfn-resource-types/aws-ec2-natgateway";
import { _AWS_EC2_NETWORKACL } from "./cfn-resource-types/aws-ec2-networkacl";
import { _AWS_EC2_NETWORKACLENTRY } from "./cfn-resource-types/aws-ec2-networkaclentry";
import { _AWS_EC2_NETWORKINSIGHTSACCESSSCOPE } from "./cfn-resource-types/aws-ec2-networkinsightsaccessscope";
import { _AWS_EC2_NETWORKINSIGHTSACCESSSCOPEANALYSIS } from "./cfn-resource-types/aws-ec2-networkinsightsaccessscopeanalysis";
import { _AWS_EC2_NETWORKINSIGHTSANALYSIS } from "./cfn-resource-types/aws-ec2-networkinsightsanalysis";
import { _AWS_EC2_NETWORKINSIGHTSPATH } from "./cfn-resource-types/aws-ec2-networkinsightspath";
import { _AWS_EC2_NETWORKINTERFACE } from "./cfn-resource-types/aws-ec2-networkinterface";
import { _AWS_EC2_NETWORKINTERFACEATTACHMENT } from "./cfn-resource-types/aws-ec2-networkinterfaceattachment";
import { _AWS_EC2_NETWORKINTERFACEPERMISSION } from "./cfn-resource-types/aws-ec2-networkinterfacepermission";
import { _AWS_EC2_NETWORKPERFORMANCEMETRICSUBSCRIPTION } from "./cfn-resource-types/aws-ec2-networkperformancemetricsubscription";
import { _AWS_EC2_PLACEMENTGROUP } from "./cfn-resource-types/aws-ec2-placementgroup";
import { _AWS_EC2_PREFIXLIST } from "./cfn-resource-types/aws-ec2-prefixlist";
import { _AWS_EC2_ROUTE } from "./cfn-resource-types/aws-ec2-route";
import { _AWS_EC2_ROUTETABLE } from "./cfn-resource-types/aws-ec2-routetable";
import { _AWS_EC2_SECURITYGROUP } from "./cfn-resource-types/aws-ec2-securitygroup";
import { _AWS_EC2_SECURITYGROUPEGRESS } from "./cfn-resource-types/aws-ec2-securitygroupegress";
import { _AWS_EC2_SECURITYGROUPINGRESS } from "./cfn-resource-types/aws-ec2-securitygroupingress";
import { _AWS_EC2_SNAPSHOTBLOCKPUBLICACCESS } from "./cfn-resource-types/aws-ec2-snapshotblockpublicaccess";
import { _AWS_EC2_SPOTFLEET } from "./cfn-resource-types/aws-ec2-spotfleet";
import { _AWS_EC2_SUBNET } from "./cfn-resource-types/aws-ec2-subnet";
import { _AWS_EC2_SUBNETCIDRBLOCK } from "./cfn-resource-types/aws-ec2-subnetcidrblock";
import { _AWS_EC2_SUBNETNETWORKACLASSOCIATION } from "./cfn-resource-types/aws-ec2-subnetnetworkaclassociation";
import { _AWS_EC2_SUBNETROUTETABLEASSOCIATION } from "./cfn-resource-types/aws-ec2-subnetroutetableassociation";
import { _AWS_EC2_TRAFFICMIRRORFILTER } from "./cfn-resource-types/aws-ec2-trafficmirrorfilter";
import { _AWS_EC2_TRAFFICMIRRORFILTERRULE } from "./cfn-resource-types/aws-ec2-trafficmirrorfilterrule";
import { _AWS_EC2_TRAFFICMIRRORSESSION } from "./cfn-resource-types/aws-ec2-trafficmirrorsession";
import { _AWS_EC2_TRAFFICMIRRORTARGET } from "./cfn-resource-types/aws-ec2-trafficmirrortarget";
import { _AWS_EC2_TRANSITGATEWAY } from "./cfn-resource-types/aws-ec2-transitgateway";
import { _AWS_EC2_TRANSITGATEWAYATTACHMENT } from "./cfn-resource-types/aws-ec2-transitgatewayattachment";
import { _AWS_EC2_TRANSITGATEWAYCONNECT } from "./cfn-resource-types/aws-ec2-transitgatewayconnect";
import { _AWS_EC2_TRANSITGATEWAYMULTICASTDOMAIN } from "./cfn-resource-types/aws-ec2-transitgatewaymulticastdomain";
import { _AWS_EC2_TRANSITGATEWAYMULTICASTDOMAINASSOCIATION } from "./cfn-resource-types/aws-ec2-transitgatewaymulticastdomainassociation";
import { _AWS_EC2_TRANSITGATEWAYMULTICASTGROUPMEMBER } from "./cfn-resource-types/aws-ec2-transitgatewaymulticastgroupmember";
import { _AWS_EC2_TRANSITGATEWAYMULTICASTGROUPSOURCE } from "./cfn-resource-types/aws-ec2-transitgatewaymulticastgroupsource";
import { _AWS_EC2_TRANSITGATEWAYPEERINGATTACHMENT } from "./cfn-resource-types/aws-ec2-transitgatewaypeeringattachment";
import { _AWS_EC2_TRANSITGATEWAYROUTE } from "./cfn-resource-types/aws-ec2-transitgatewayroute";
import { _AWS_EC2_TRANSITGATEWAYROUTETABLE } from "./cfn-resource-types/aws-ec2-transitgatewayroutetable";
import { _AWS_EC2_TRANSITGATEWAYROUTETABLEASSOCIATION } from "./cfn-resource-types/aws-ec2-transitgatewayroutetableassociation";
import { _AWS_EC2_TRANSITGATEWAYROUTETABLEPROPAGATION } from "./cfn-resource-types/aws-ec2-transitgatewayroutetablepropagation";
import { _AWS_EC2_TRANSITGATEWAYVPCATTACHMENT } from "./cfn-resource-types/aws-ec2-transitgatewayvpcattachment";
import { _AWS_EC2_VERIFIEDACCESSENDPOINT } from "./cfn-resource-types/aws-ec2-verifiedaccessendpoint";
import { _AWS_EC2_VERIFIEDACCESSGROUP } from "./cfn-resource-types/aws-ec2-verifiedaccessgroup";
import { _AWS_EC2_VERIFIEDACCESSINSTANCE } from "./cfn-resource-types/aws-ec2-verifiedaccessinstance";
import { _AWS_EC2_VOLUME } from "./cfn-resource-types/aws-ec2-volume";
import { _AWS_EC2_VOLUMEATTACHMENT } from "./cfn-resource-types/aws-ec2-volumeattachment";
import { _AWS_EC2_VPC } from "./cfn-resource-types/aws-ec2-vpc";
import { _AWS_EC2_VPCCIDRBLOCK } from "./cfn-resource-types/aws-ec2-vpccidrblock";
import { _AWS_EC2_VPCDHCPOPTIONSASSOCIATION } from "./cfn-resource-types/aws-ec2-vpcdhcpoptionsassociation";
import { _AWS_EC2_VPCENDPOINT } from "./cfn-resource-types/aws-ec2-vpcendpoint";
import { _AWS_EC2_VPCENDPOINTCONNECTIONNOTIFICATION } from "./cfn-resource-types/aws-ec2-vpcendpointconnectionnotification";
import { _AWS_EC2_VPCENDPOINTSERVICE } from "./cfn-resource-types/aws-ec2-vpcendpointservice";
import { _AWS_EC2_VPCENDPOINTSERVICEPERMISSIONS } from "./cfn-resource-types/aws-ec2-vpcendpointservicepermissions";
import { _AWS_EC2_VPCGATEWAYATTACHMENT } from "./cfn-resource-types/aws-ec2-vpcgatewayattachment";
import { _AWS_EC2_VPCPEERINGCONNECTION } from "./cfn-resource-types/aws-ec2-vpcpeeringconnection";
import { _AWS_EC2_VPNCONNECTION } from "./cfn-resource-types/aws-ec2-vpnconnection";
import { _AWS_EC2_VPNCONNECTIONROUTE } from "./cfn-resource-types/aws-ec2-vpnconnectionroute";
import { _AWS_EC2_VPNGATEWAY } from "./cfn-resource-types/aws-ec2-vpngateway";
import { _AWS_EC2_VPNGATEWAYROUTEPROPAGATION } from "./cfn-resource-types/aws-ec2-vpngatewayroutepropagation";
import { _AWS_ECR_PUBLICREPOSITORY } from "./cfn-resource-types/aws-ecr-publicrepository";
import { _AWS_ECR_PULLTHROUGHCACHERULE } from "./cfn-resource-types/aws-ecr-pullthroughcacherule";
import { _AWS_ECR_REGISTRYPOLICY } from "./cfn-resource-types/aws-ecr-registrypolicy";
import { _AWS_ECR_REPLICATIONCONFIGURATION } from "./cfn-resource-types/aws-ecr-replicationconfiguration";
import { _AWS_ECR_REPOSITORY } from "./cfn-resource-types/aws-ecr-repository";
import { _AWS_ECR_REPOSITORYCREATIONTEMPLATE } from "./cfn-resource-types/aws-ecr-repositorycreationtemplate";
import { _AWS_ECS_CAPACITYPROVIDER } from "./cfn-resource-types/aws-ecs-capacityprovider";
import { _AWS_ECS_CLUSTER } from "./cfn-resource-types/aws-ecs-cluster";
import { _AWS_ECS_CLUSTERCAPACITYPROVIDERASSOCIATIONS } from "./cfn-resource-types/aws-ecs-clustercapacityproviderassociations";
import { _AWS_ECS_PRIMARYTASKSET } from "./cfn-resource-types/aws-ecs-primarytaskset";
import { _AWS_ECS_SERVICE } from "./cfn-resource-types/aws-ecs-service";
import { _AWS_ECS_TASKDEFINITION } from "./cfn-resource-types/aws-ecs-taskdefinition";
import { _AWS_ECS_TASKSET } from "./cfn-resource-types/aws-ecs-taskset";
import { _AWS_EFS_ACCESSPOINT } from "./cfn-resource-types/aws-efs-accesspoint";
import { _AWS_EFS_FILESYSTEM } from "./cfn-resource-types/aws-efs-filesystem";
import { _AWS_EFS_MOUNTTARGET } from "./cfn-resource-types/aws-efs-mounttarget";
import { _AWS_EKS_ACCESSENTRY } from "./cfn-resource-types/aws-eks-accessentry";
import { _AWS_EKS_ADDON } from "./cfn-resource-types/aws-eks-addon";
import { _AWS_EKS_CLUSTER } from "./cfn-resource-types/aws-eks-cluster";
import { _AWS_EKS_FARGATEPROFILE } from "./cfn-resource-types/aws-eks-fargateprofile";
import { _AWS_EKS_IDENTITYPROVIDERCONFIG } from "./cfn-resource-types/aws-eks-identityproviderconfig";
import { _AWS_EKS_NODEGROUP } from "./cfn-resource-types/aws-eks-nodegroup";
import { _AWS_EKS_PODIDENTITYASSOCIATION } from "./cfn-resource-types/aws-eks-podidentityassociation";
import { _AWS_ELASTICACHE_CACHECLUSTER } from "./cfn-resource-types/aws-elasticache-cachecluster";
import { _AWS_ELASTICACHE_GLOBALREPLICATIONGROUP } from "./cfn-resource-types/aws-elasticache-globalreplicationgroup";
import { _AWS_ELASTICACHE_PARAMETERGROUP } from "./cfn-resource-types/aws-elasticache-parametergroup";
import { _AWS_ELASTICACHE_REPLICATIONGROUP } from "./cfn-resource-types/aws-elasticache-replicationgroup";
import { _AWS_ELASTICACHE_SECURITYGROUP } from "./cfn-resource-types/aws-elasticache-securitygroup";
import { _AWS_ELASTICACHE_SECURITYGROUPINGRESS } from "./cfn-resource-types/aws-elasticache-securitygroupingress";
import { _AWS_ELASTICACHE_SERVERLESSCACHE } from "./cfn-resource-types/aws-elasticache-serverlesscache";
import { _AWS_ELASTICACHE_SUBNETGROUP } from "./cfn-resource-types/aws-elasticache-subnetgroup";
import { _AWS_ELASTICACHE_USER } from "./cfn-resource-types/aws-elasticache-user";
import { _AWS_ELASTICACHE_USERGROUP } from "./cfn-resource-types/aws-elasticache-usergroup";
import { _AWS_ELASTICBEANSTALK_APPLICATION } from "./cfn-resource-types/aws-elasticbeanstalk-application";
import { _AWS_ELASTICBEANSTALK_APPLICATIONVERSION } from "./cfn-resource-types/aws-elasticbeanstalk-applicationversion";
import { _AWS_ELASTICBEANSTALK_CONFIGURATIONTEMPLATE } from "./cfn-resource-types/aws-elasticbeanstalk-configurationtemplate";
import { _AWS_ELASTICBEANSTALK_ENVIRONMENT } from "./cfn-resource-types/aws-elasticbeanstalk-environment";
import { _AWS_ELASTICLOADBALANCING_LOADBALANCER } from "./cfn-resource-types/aws-elasticloadbalancing-loadbalancer";
import { _AWS_ELASTICLOADBALANCINGV2_LISTENER } from "./cfn-resource-types/aws-elasticloadbalancingv2-listener";
import { _AWS_ELASTICLOADBALANCINGV2_LISTENERCERTIFICATE } from "./cfn-resource-types/aws-elasticloadbalancingv2-listenercertificate";
import { _AWS_ELASTICLOADBALANCINGV2_LISTENERRULE } from "./cfn-resource-types/aws-elasticloadbalancingv2-listenerrule";
import { _AWS_ELASTICLOADBALANCINGV2_LOADBALANCER } from "./cfn-resource-types/aws-elasticloadbalancingv2-loadbalancer";
import { _AWS_ELASTICLOADBALANCINGV2_TARGETGROUP } from "./cfn-resource-types/aws-elasticloadbalancingv2-targetgroup";
import { _AWS_ELASTICLOADBALANCINGV2_TRUSTSTORE } from "./cfn-resource-types/aws-elasticloadbalancingv2-truststore";
import { _AWS_ELASTICLOADBALANCINGV2_TRUSTSTOREREVOCATION } from "./cfn-resource-types/aws-elasticloadbalancingv2-truststorerevocation";
import { _AWS_ELASTICSEARCH_DOMAIN } from "./cfn-resource-types/aws-elasticsearch-domain";
import { _AWS_EMR_CLUSTER } from "./cfn-resource-types/aws-emr-cluster";
import { _AWS_EMR_INSTANCEFLEETCONFIG } from "./cfn-resource-types/aws-emr-instancefleetconfig";
import { _AWS_EMR_INSTANCEGROUPCONFIG } from "./cfn-resource-types/aws-emr-instancegroupconfig";
import { _AWS_EMR_SECURITYCONFIGURATION } from "./cfn-resource-types/aws-emr-securityconfiguration";
import { _AWS_EMR_STEP } from "./cfn-resource-types/aws-emr-step";
import { _AWS_EMR_STUDIO } from "./cfn-resource-types/aws-emr-studio";
import { _AWS_EMR_STUDIOSESSIONMAPPING } from "./cfn-resource-types/aws-emr-studiosessionmapping";
import { _AWS_EMR_WALWORKSPACE } from "./cfn-resource-types/aws-emr-walworkspace";
import { _AWS_EMRCONTAINERS_VIRTUALCLUSTER } from "./cfn-resource-types/aws-emrcontainers-virtualcluster";
import { _AWS_EMRSERVERLESS_APPLICATION } from "./cfn-resource-types/aws-emrserverless-application";
import { _AWS_ENTITYRESOLUTION_IDMAPPINGWORKFLOW } from "./cfn-resource-types/aws-entityresolution-idmappingworkflow";
import { _AWS_ENTITYRESOLUTION_IDNAMESPACE } from "./cfn-resource-types/aws-entityresolution-idnamespace";
import { _AWS_ENTITYRESOLUTION_MATCHINGWORKFLOW } from "./cfn-resource-types/aws-entityresolution-matchingworkflow";
import { _AWS_ENTITYRESOLUTION_POLICYSTATEMENT } from "./cfn-resource-types/aws-entityresolution-policystatement";
import { _AWS_ENTITYRESOLUTION_SCHEMAMAPPING } from "./cfn-resource-types/aws-entityresolution-schemamapping";
import { _AWS_EVENTS_APIDESTINATION } from "./cfn-resource-types/aws-events-apidestination";
import { _AWS_EVENTS_ARCHIVE } from "./cfn-resource-types/aws-events-archive";
import { _AWS_EVENTS_CONNECTION } from "./cfn-resource-types/aws-events-connection";
import { _AWS_EVENTS_ENDPOINT } from "./cfn-resource-types/aws-events-endpoint";
import { _AWS_EVENTS_EVENTBUS } from "./cfn-resource-types/aws-events-eventbus";
import { _AWS_EVENTS_EVENTBUSPOLICY } from "./cfn-resource-types/aws-events-eventbuspolicy";
import { _AWS_EVENTS_RULE } from "./cfn-resource-types/aws-events-rule";
import { _AWS_EVENTSCHEMAS_DISCOVERER } from "./cfn-resource-types/aws-eventschemas-discoverer";
import { _AWS_EVENTSCHEMAS_REGISTRY } from "./cfn-resource-types/aws-eventschemas-registry";
import { _AWS_EVENTSCHEMAS_REGISTRYPOLICY } from "./cfn-resource-types/aws-eventschemas-registrypolicy";
import { _AWS_EVENTSCHEMAS_SCHEMA } from "./cfn-resource-types/aws-eventschemas-schema";
import { _AWS_EVIDENTLY_EXPERIMENT } from "./cfn-resource-types/aws-evidently-experiment";
import { _AWS_EVIDENTLY_FEATURE } from "./cfn-resource-types/aws-evidently-feature";
import { _AWS_EVIDENTLY_LAUNCH } from "./cfn-resource-types/aws-evidently-launch";
import { _AWS_EVIDENTLY_PROJECT } from "./cfn-resource-types/aws-evidently-project";
import { _AWS_EVIDENTLY_SEGMENT } from "./cfn-resource-types/aws-evidently-segment";
import { _AWS_FINSPACE_ENVIRONMENT } from "./cfn-resource-types/aws-finspace-environment";
import { _AWS_FIS_EXPERIMENTTEMPLATE } from "./cfn-resource-types/aws-fis-experimenttemplate";
import { _AWS_FIS_TARGETACCOUNTCONFIGURATION } from "./cfn-resource-types/aws-fis-targetaccountconfiguration";
import { _AWS_FMS_NOTIFICATIONCHANNEL } from "./cfn-resource-types/aws-fms-notificationchannel";
import { _AWS_FMS_POLICY } from "./cfn-resource-types/aws-fms-policy";
import { _AWS_FMS_RESOURCESET } from "./cfn-resource-types/aws-fms-resourceset";
import { _AWS_FORECAST_DATASET } from "./cfn-resource-types/aws-forecast-dataset";
import { _AWS_FORECAST_DATASETGROUP } from "./cfn-resource-types/aws-forecast-datasetgroup";
import { _AWS_FRAUDDETECTOR_DETECTOR } from "./cfn-resource-types/aws-frauddetector-detector";
import { _AWS_FRAUDDETECTOR_ENTITYTYPE } from "./cfn-resource-types/aws-frauddetector-entitytype";
import { _AWS_FRAUDDETECTOR_EVENTTYPE } from "./cfn-resource-types/aws-frauddetector-eventtype";
import { _AWS_FRAUDDETECTOR_LABEL } from "./cfn-resource-types/aws-frauddetector-label";
import { _AWS_FRAUDDETECTOR_LIST } from "./cfn-resource-types/aws-frauddetector-list";
import { _AWS_FRAUDDETECTOR_OUTCOME } from "./cfn-resource-types/aws-frauddetector-outcome";
import { _AWS_FRAUDDETECTOR_VARIABLE } from "./cfn-resource-types/aws-frauddetector-variable";
import { _AWS_FSX_DATAREPOSITORYASSOCIATION } from "./cfn-resource-types/aws-fsx-datarepositoryassociation";
import { _AWS_FSX_FILESYSTEM } from "./cfn-resource-types/aws-fsx-filesystem";
import { _AWS_FSX_SNAPSHOT } from "./cfn-resource-types/aws-fsx-snapshot";
import { _AWS_FSX_STORAGEVIRTUALMACHINE } from "./cfn-resource-types/aws-fsx-storagevirtualmachine";
import { _AWS_FSX_VOLUME } from "./cfn-resource-types/aws-fsx-volume";
import { _AWS_GAMELIFT_ALIAS } from "./cfn-resource-types/aws-gamelift-alias";
import { _AWS_GAMELIFT_BUILD } from "./cfn-resource-types/aws-gamelift-build";
import { _AWS_GAMELIFT_CONTAINERGROUPDEFINITION } from "./cfn-resource-types/aws-gamelift-containergroupdefinition";
import { _AWS_GAMELIFT_FLEET } from "./cfn-resource-types/aws-gamelift-fleet";
import { _AWS_GAMELIFT_GAMESERVERGROUP } from "./cfn-resource-types/aws-gamelift-gameservergroup";
import { _AWS_GAMELIFT_GAMESESSIONQUEUE } from "./cfn-resource-types/aws-gamelift-gamesessionqueue";
import { _AWS_GAMELIFT_LOCATION } from "./cfn-resource-types/aws-gamelift-location";
import { _AWS_GAMELIFT_MATCHMAKINGCONFIGURATION } from "./cfn-resource-types/aws-gamelift-matchmakingconfiguration";
import { _AWS_GAMELIFT_MATCHMAKINGRULESET } from "./cfn-resource-types/aws-gamelift-matchmakingruleset";
import { _AWS_GAMELIFT_SCRIPT } from "./cfn-resource-types/aws-gamelift-script";
import { _AWS_GLOBALACCELERATOR_ACCELERATOR } from "./cfn-resource-types/aws-globalaccelerator-accelerator";
import { _AWS_GLOBALACCELERATOR_CROSSACCOUNTATTACHMENT } from "./cfn-resource-types/aws-globalaccelerator-crossaccountattachment";
import { _AWS_GLOBALACCELERATOR_ENDPOINTGROUP } from "./cfn-resource-types/aws-globalaccelerator-endpointgroup";
import { _AWS_GLOBALACCELERATOR_LISTENER } from "./cfn-resource-types/aws-globalaccelerator-listener";
import { _AWS_GLUE_CLASSIFIER } from "./cfn-resource-types/aws-glue-classifier";
import { _AWS_GLUE_CONNECTION } from "./cfn-resource-types/aws-glue-connection";
import { _AWS_GLUE_CRAWLER } from "./cfn-resource-types/aws-glue-crawler";
import { _AWS_GLUE_CUSTOMENTITYTYPE } from "./cfn-resource-types/aws-glue-customentitytype";
import { _AWS_GLUE_DATABASE } from "./cfn-resource-types/aws-glue-database";
import { _AWS_GLUE_DATACATALOGENCRYPTIONSETTINGS } from "./cfn-resource-types/aws-glue-datacatalogencryptionsettings";
import { _AWS_GLUE_DATAQUALITYRULESET } from "./cfn-resource-types/aws-glue-dataqualityruleset";
import { _AWS_GLUE_DEVENDPOINT } from "./cfn-resource-types/aws-glue-devendpoint";
import { _AWS_GLUE_JOB } from "./cfn-resource-types/aws-glue-job";
import { _AWS_GLUE_MLTRANSFORM } from "./cfn-resource-types/aws-glue-mltransform";
import { _AWS_GLUE_PARTITION } from "./cfn-resource-types/aws-glue-partition";
import { _AWS_GLUE_REGISTRY } from "./cfn-resource-types/aws-glue-registry";
import { _AWS_GLUE_SCHEMA } from "./cfn-resource-types/aws-glue-schema";
import { _AWS_GLUE_SCHEMAVERSION } from "./cfn-resource-types/aws-glue-schemaversion";
import { _AWS_GLUE_SCHEMAVERSIONMETADATA } from "./cfn-resource-types/aws-glue-schemaversionmetadata";
import { _AWS_GLUE_SECURITYCONFIGURATION } from "./cfn-resource-types/aws-glue-securityconfiguration";
import { _AWS_GLUE_TABLE } from "./cfn-resource-types/aws-glue-table";
import { _AWS_GLUE_TABLEOPTIMIZER } from "./cfn-resource-types/aws-glue-tableoptimizer";
import { _AWS_GLUE_TRIGGER } from "./cfn-resource-types/aws-glue-trigger";
import { _AWS_GLUE_WORKFLOW } from "./cfn-resource-types/aws-glue-workflow";
import { _AWS_GRAFANA_WORKSPACE } from "./cfn-resource-types/aws-grafana-workspace";
import { _AWS_GREENGRASS_CONNECTORDEFINITION } from "./cfn-resource-types/aws-greengrass-connectordefinition";
import { _AWS_GREENGRASS_CONNECTORDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-connectordefinitionversion";
import { _AWS_GREENGRASS_COREDEFINITION } from "./cfn-resource-types/aws-greengrass-coredefinition";
import { _AWS_GREENGRASS_COREDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-coredefinitionversion";
import { _AWS_GREENGRASS_DEVICEDEFINITION } from "./cfn-resource-types/aws-greengrass-devicedefinition";
import { _AWS_GREENGRASS_DEVICEDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-devicedefinitionversion";
import { _AWS_GREENGRASS_FUNCTIONDEFINITION } from "./cfn-resource-types/aws-greengrass-functiondefinition";
import { _AWS_GREENGRASS_FUNCTIONDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-functiondefinitionversion";
import { _AWS_GREENGRASS_GROUP } from "./cfn-resource-types/aws-greengrass-group";
import { _AWS_GREENGRASS_GROUPVERSION } from "./cfn-resource-types/aws-greengrass-groupversion";
import { _AWS_GREENGRASS_LOGGERDEFINITION } from "./cfn-resource-types/aws-greengrass-loggerdefinition";
import { _AWS_GREENGRASS_LOGGERDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-loggerdefinitionversion";
import { _AWS_GREENGRASS_RESOURCEDEFINITION } from "./cfn-resource-types/aws-greengrass-resourcedefinition";
import { _AWS_GREENGRASS_RESOURCEDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-resourcedefinitionversion";
import { _AWS_GREENGRASS_SUBSCRIPTIONDEFINITION } from "./cfn-resource-types/aws-greengrass-subscriptiondefinition";
import { _AWS_GREENGRASS_SUBSCRIPTIONDEFINITIONVERSION } from "./cfn-resource-types/aws-greengrass-subscriptiondefinitionversion";
import { _AWS_GREENGRASSV2_COMPONENTVERSION } from "./cfn-resource-types/aws-greengrassv2-componentversion";
import { _AWS_GREENGRASSV2_DEPLOYMENT } from "./cfn-resource-types/aws-greengrassv2-deployment";
import { _AWS_GROUNDSTATION_CONFIG } from "./cfn-resource-types/aws-groundstation-config";
import { _AWS_GROUNDSTATION_DATAFLOWENDPOINTGROUP } from "./cfn-resource-types/aws-groundstation-dataflowendpointgroup";
import { _AWS_GROUNDSTATION_MISSIONPROFILE } from "./cfn-resource-types/aws-groundstation-missionprofile";
import { _AWS_GUARDDUTY_DETECTOR } from "./cfn-resource-types/aws-guardduty-detector";
import { _AWS_GUARDDUTY_FILTER } from "./cfn-resource-types/aws-guardduty-filter";
import { _AWS_GUARDDUTY_IPSET } from "./cfn-resource-types/aws-guardduty-ipset";
import { _AWS_GUARDDUTY_MALWAREPROTECTIONPLAN } from "./cfn-resource-types/aws-guardduty-malwareprotectionplan";
import { _AWS_GUARDDUTY_MASTER } from "./cfn-resource-types/aws-guardduty-master";
import { _AWS_GUARDDUTY_MEMBER } from "./cfn-resource-types/aws-guardduty-member";
import { _AWS_GUARDDUTY_THREATINTELSET } from "./cfn-resource-types/aws-guardduty-threatintelset";
import { _AWS_HEALTHIMAGING_DATASTORE } from "./cfn-resource-types/aws-healthimaging-datastore";
import { _AWS_HEALTHLAKE_FHIRDATASTORE } from "./cfn-resource-types/aws-healthlake-fhirdatastore";
import { _AWS_IAM_ACCESSKEY } from "./cfn-resource-types/aws-iam-accesskey";
import { _AWS_IAM_GROUP } from "./cfn-resource-types/aws-iam-group";
import { _AWS_IAM_GROUPPOLICY } from "./cfn-resource-types/aws-iam-grouppolicy";
import { _AWS_IAM_INSTANCEPROFILE } from "./cfn-resource-types/aws-iam-instanceprofile";
import { _AWS_IAM_MANAGEDPOLICY } from "./cfn-resource-types/aws-iam-managedpolicy";
import { _AWS_IAM_OIDCPROVIDER } from "./cfn-resource-types/aws-iam-oidcprovider";
import { _AWS_IAM_POLICY } from "./cfn-resource-types/aws-iam-policy";
import { _AWS_IAM_ROLE } from "./cfn-resource-types/aws-iam-role";
import { _AWS_IAM_ROLEPOLICY } from "./cfn-resource-types/aws-iam-rolepolicy";
import { _AWS_IAM_SAMLPROVIDER } from "./cfn-resource-types/aws-iam-samlprovider";
import { _AWS_IAM_SERVERCERTIFICATE } from "./cfn-resource-types/aws-iam-servercertificate";
import { _AWS_IAM_SERVICELINKEDROLE } from "./cfn-resource-types/aws-iam-servicelinkedrole";
import { _AWS_IAM_USER } from "./cfn-resource-types/aws-iam-user";
import { _AWS_IAM_USERPOLICY } from "./cfn-resource-types/aws-iam-userpolicy";
import { _AWS_IAM_USERTOGROUPADDITION } from "./cfn-resource-types/aws-iam-usertogroupaddition";
import { _AWS_IAM_VIRTUALMFADEVICE } from "./cfn-resource-types/aws-iam-virtualmfadevice";
import { _AWS_IDENTITYSTORE_GROUP } from "./cfn-resource-types/aws-identitystore-group";
import { _AWS_IDENTITYSTORE_GROUPMEMBERSHIP } from "./cfn-resource-types/aws-identitystore-groupmembership";
import { _AWS_IMAGEBUILDER_COMPONENT } from "./cfn-resource-types/aws-imagebuilder-component";
import { _AWS_IMAGEBUILDER_CONTAINERRECIPE } from "./cfn-resource-types/aws-imagebuilder-containerrecipe";
import { _AWS_IMAGEBUILDER_DISTRIBUTIONCONFIGURATION } from "./cfn-resource-types/aws-imagebuilder-distributionconfiguration";
import { _AWS_IMAGEBUILDER_IMAGE } from "./cfn-resource-types/aws-imagebuilder-image";
import { _AWS_IMAGEBUILDER_IMAGEPIPELINE } from "./cfn-resource-types/aws-imagebuilder-imagepipeline";
import { _AWS_IMAGEBUILDER_IMAGERECIPE } from "./cfn-resource-types/aws-imagebuilder-imagerecipe";
import { _AWS_IMAGEBUILDER_INFRASTRUCTURECONFIGURATION } from "./cfn-resource-types/aws-imagebuilder-infrastructureconfiguration";
import { _AWS_IMAGEBUILDER_LIFECYCLEPOLICY } from "./cfn-resource-types/aws-imagebuilder-lifecyclepolicy";
import { _AWS_IMAGEBUILDER_WORKFLOW } from "./cfn-resource-types/aws-imagebuilder-workflow";
import { _AWS_INSPECTOR_ASSESSMENTTARGET } from "./cfn-resource-types/aws-inspector-assessmenttarget";
import { _AWS_INSPECTOR_ASSESSMENTTEMPLATE } from "./cfn-resource-types/aws-inspector-assessmenttemplate";
import { _AWS_INSPECTOR_RESOURCEGROUP } from "./cfn-resource-types/aws-inspector-resourcegroup";
import { _AWS_INSPECTORV2_CISSCANCONFIGURATION } from "./cfn-resource-types/aws-inspectorv2-cisscanconfiguration";
import { _AWS_INSPECTORV2_FILTER } from "./cfn-resource-types/aws-inspectorv2-filter";
import { _AWS_INTERNETMONITOR_MONITOR } from "./cfn-resource-types/aws-internetmonitor-monitor";
import { _AWS_IOT_ACCOUNTAUDITCONFIGURATION } from "./cfn-resource-types/aws-iot-accountauditconfiguration";
import { _AWS_IOT_AUTHORIZER } from "./cfn-resource-types/aws-iot-authorizer";
import { _AWS_IOT_BILLINGGROUP } from "./cfn-resource-types/aws-iot-billinggroup";
import { _AWS_IOT_CACERTIFICATE } from "./cfn-resource-types/aws-iot-cacertificate";
import { _AWS_IOT_CERTIFICATE } from "./cfn-resource-types/aws-iot-certificate";
import { _AWS_IOT_CERTIFICATEPROVIDER } from "./cfn-resource-types/aws-iot-certificateprovider";
import { _AWS_IOT_CUSTOMMETRIC } from "./cfn-resource-types/aws-iot-custommetric";
import { _AWS_IOT_DIMENSION } from "./cfn-resource-types/aws-iot-dimension";
import { _AWS_IOT_DOMAINCONFIGURATION } from "./cfn-resource-types/aws-iot-domainconfiguration";
import { _AWS_IOT_FLEETMETRIC } from "./cfn-resource-types/aws-iot-fleetmetric";
import { _AWS_IOT_JOBTEMPLATE } from "./cfn-resource-types/aws-iot-jobtemplate";
import { _AWS_IOT_LOGGING } from "./cfn-resource-types/aws-iot-logging";
import { _AWS_IOT_MITIGATIONACTION } from "./cfn-resource-types/aws-iot-mitigationaction";
import { _AWS_IOT_POLICY } from "./cfn-resource-types/aws-iot-policy";
import { _AWS_IOT_POLICYPRINCIPALATTACHMENT } from "./cfn-resource-types/aws-iot-policyprincipalattachment";
import { _AWS_IOT_PROVISIONINGTEMPLATE } from "./cfn-resource-types/aws-iot-provisioningtemplate";
import { _AWS_IOT_RESOURCESPECIFICLOGGING } from "./cfn-resource-types/aws-iot-resourcespecificlogging";
import { _AWS_IOT_ROLEALIAS } from "./cfn-resource-types/aws-iot-rolealias";
import { _AWS_IOT_SCHEDULEDAUDIT } from "./cfn-resource-types/aws-iot-scheduledaudit";
import { _AWS_IOT_SECURITYPROFILE } from "./cfn-resource-types/aws-iot-securityprofile";
import { _AWS_IOT_SOFTWAREPACKAGE } from "./cfn-resource-types/aws-iot-softwarepackage";
import { _AWS_IOT_SOFTWAREPACKAGEVERSION } from "./cfn-resource-types/aws-iot-softwarepackageversion";
import { _AWS_IOT_THING } from "./cfn-resource-types/aws-iot-thing";
import { _AWS_IOT_THINGGROUP } from "./cfn-resource-types/aws-iot-thinggroup";
import { _AWS_IOT_THINGPRINCIPALATTACHMENT } from "./cfn-resource-types/aws-iot-thingprincipalattachment";
import { _AWS_IOT_THINGTYPE } from "./cfn-resource-types/aws-iot-thingtype";
import { _AWS_IOT_TOPICRULE } from "./cfn-resource-types/aws-iot-topicrule";
import { _AWS_IOT_TOPICRULEDESTINATION } from "./cfn-resource-types/aws-iot-topicruledestination";
import { _AWS_IOT1CLICK_DEVICE } from "./cfn-resource-types/aws-iot1click-device";
import { _AWS_IOT1CLICK_PLACEMENT } from "./cfn-resource-types/aws-iot1click-placement";
import { _AWS_IOT1CLICK_PROJECT } from "./cfn-resource-types/aws-iot1click-project";
import { _AWS_IOTANALYTICS_CHANNEL } from "./cfn-resource-types/aws-iotanalytics-channel";
import { _AWS_IOTANALYTICS_DATASET } from "./cfn-resource-types/aws-iotanalytics-dataset";
import { _AWS_IOTANALYTICS_DATASTORE } from "./cfn-resource-types/aws-iotanalytics-datastore";
import { _AWS_IOTANALYTICS_PIPELINE } from "./cfn-resource-types/aws-iotanalytics-pipeline";
import { _AWS_IOTCOREDEVICEADVISOR_SUITEDEFINITION } from "./cfn-resource-types/aws-iotcoredeviceadvisor-suitedefinition";
import { _AWS_IOTEVENTS_ALARMMODEL } from "./cfn-resource-types/aws-iotevents-alarmmodel";
import { _AWS_IOTEVENTS_DETECTORMODEL } from "./cfn-resource-types/aws-iotevents-detectormodel";
import { _AWS_IOTEVENTS_INPUT } from "./cfn-resource-types/aws-iotevents-input";
import { _AWS_IOTFLEETHUB_APPLICATION } from "./cfn-resource-types/aws-iotfleethub-application";
import { _AWS_IOTFLEETWISE_CAMPAIGN } from "./cfn-resource-types/aws-iotfleetwise-campaign";
import { _AWS_IOTFLEETWISE_DECODERMANIFEST } from "./cfn-resource-types/aws-iotfleetwise-decodermanifest";
import { _AWS_IOTFLEETWISE_FLEET } from "./cfn-resource-types/aws-iotfleetwise-fleet";
import { _AWS_IOTFLEETWISE_MODELMANIFEST } from "./cfn-resource-types/aws-iotfleetwise-modelmanifest";
import { _AWS_IOTFLEETWISE_SIGNALCATALOG } from "./cfn-resource-types/aws-iotfleetwise-signalcatalog";
import { _AWS_IOTFLEETWISE_VEHICLE } from "./cfn-resource-types/aws-iotfleetwise-vehicle";
import { _AWS_IOTSITEWISE_ACCESSPOLICY } from "./cfn-resource-types/aws-iotsitewise-accesspolicy";
import { _AWS_IOTSITEWISE_ASSET } from "./cfn-resource-types/aws-iotsitewise-asset";
import { _AWS_IOTSITEWISE_ASSETMODEL } from "./cfn-resource-types/aws-iotsitewise-assetmodel";
import { _AWS_IOTSITEWISE_DASHBOARD } from "./cfn-resource-types/aws-iotsitewise-dashboard";
import { _AWS_IOTSITEWISE_GATEWAY } from "./cfn-resource-types/aws-iotsitewise-gateway";
import { _AWS_IOTSITEWISE_PORTAL } from "./cfn-resource-types/aws-iotsitewise-portal";
import { _AWS_IOTSITEWISE_PROJECT } from "./cfn-resource-types/aws-iotsitewise-project";
import { _AWS_IOTTHINGSGRAPH_FLOWTEMPLATE } from "./cfn-resource-types/aws-iotthingsgraph-flowtemplate";
import { _AWS_IOTTWINMAKER_COMPONENTTYPE } from "./cfn-resource-types/aws-iottwinmaker-componenttype";
import { _AWS_IOTTWINMAKER_ENTITY } from "./cfn-resource-types/aws-iottwinmaker-entity";
import { _AWS_IOTTWINMAKER_SCENE } from "./cfn-resource-types/aws-iottwinmaker-scene";
import { _AWS_IOTTWINMAKER_SYNCJOB } from "./cfn-resource-types/aws-iottwinmaker-syncjob";
import { _AWS_IOTTWINMAKER_WORKSPACE } from "./cfn-resource-types/aws-iottwinmaker-workspace";
import { _AWS_IOTWIRELESS_DESTINATION } from "./cfn-resource-types/aws-iotwireless-destination";
import { _AWS_IOTWIRELESS_DEVICEPROFILE } from "./cfn-resource-types/aws-iotwireless-deviceprofile";
import { _AWS_IOTWIRELESS_FUOTATASK } from "./cfn-resource-types/aws-iotwireless-fuotatask";
import { _AWS_IOTWIRELESS_MULTICASTGROUP } from "./cfn-resource-types/aws-iotwireless-multicastgroup";
import { _AWS_IOTWIRELESS_NETWORKANALYZERCONFIGURATION } from "./cfn-resource-types/aws-iotwireless-networkanalyzerconfiguration";
import { _AWS_IOTWIRELESS_PARTNERACCOUNT } from "./cfn-resource-types/aws-iotwireless-partneraccount";
import { _AWS_IOTWIRELESS_SERVICEPROFILE } from "./cfn-resource-types/aws-iotwireless-serviceprofile";
import { _AWS_IOTWIRELESS_TASKDEFINITION } from "./cfn-resource-types/aws-iotwireless-taskdefinition";
import { _AWS_IOTWIRELESS_WIRELESSDEVICE } from "./cfn-resource-types/aws-iotwireless-wirelessdevice";
import { _AWS_IOTWIRELESS_WIRELESSDEVICEIMPORTTASK } from "./cfn-resource-types/aws-iotwireless-wirelessdeviceimporttask";
import { _AWS_IOTWIRELESS_WIRELESSGATEWAY } from "./cfn-resource-types/aws-iotwireless-wirelessgateway";
import { _AWS_IVS_CHANNEL } from "./cfn-resource-types/aws-ivs-channel";
import { _AWS_IVS_ENCODERCONFIGURATION } from "./cfn-resource-types/aws-ivs-encoderconfiguration";
import { _AWS_IVS_PLAYBACKKEYPAIR } from "./cfn-resource-types/aws-ivs-playbackkeypair";
import { _AWS_IVS_PLAYBACKRESTRICTIONPOLICY } from "./cfn-resource-types/aws-ivs-playbackrestrictionpolicy";
import { _AWS_IVS_PUBLICKEY } from "./cfn-resource-types/aws-ivs-publickey";
import { _AWS_IVS_RECORDINGCONFIGURATION } from "./cfn-resource-types/aws-ivs-recordingconfiguration";
import { _AWS_IVS_STAGE } from "./cfn-resource-types/aws-ivs-stage";
import { _AWS_IVS_STORAGECONFIGURATION } from "./cfn-resource-types/aws-ivs-storageconfiguration";
import { _AWS_IVS_STREAMKEY } from "./cfn-resource-types/aws-ivs-streamkey";
import { _AWS_IVSCHAT_LOGGINGCONFIGURATION } from "./cfn-resource-types/aws-ivschat-loggingconfiguration";
import { _AWS_IVSCHAT_ROOM } from "./cfn-resource-types/aws-ivschat-room";
import { _AWS_KAFKACONNECT_CONNECTOR } from "./cfn-resource-types/aws-kafkaconnect-connector";
import { _AWS_KAFKACONNECT_CUSTOMPLUGIN } from "./cfn-resource-types/aws-kafkaconnect-customplugin";
import { _AWS_KAFKACONNECT_WORKERCONFIGURATION } from "./cfn-resource-types/aws-kafkaconnect-workerconfiguration";
import { _AWS_KENDRA_DATASOURCE } from "./cfn-resource-types/aws-kendra-datasource";
import { _AWS_KENDRA_FAQ } from "./cfn-resource-types/aws-kendra-faq";
import { _AWS_KENDRA_INDEX } from "./cfn-resource-types/aws-kendra-index";
import { _AWS_KENDRARANKING_EXECUTIONPLAN } from "./cfn-resource-types/aws-kendraranking-executionplan";
import { _AWS_KINESIS_STREAM } from "./cfn-resource-types/aws-kinesis-stream";
import { _AWS_KINESIS_STREAMCONSUMER } from "./cfn-resource-types/aws-kinesis-streamconsumer";
import { _AWS_KINESISANALYTICS_APPLICATION } from "./cfn-resource-types/aws-kinesisanalytics-application";
import { _AWS_KINESISANALYTICS_APPLICATIONOUTPUT } from "./cfn-resource-types/aws-kinesisanalytics-applicationoutput";
import { _AWS_KINESISANALYTICS_APPLICATIONREFERENCEDATASOURCE } from "./cfn-resource-types/aws-kinesisanalytics-applicationreferencedatasource";
import { _AWS_KINESISANALYTICSV2_APPLICATION } from "./cfn-resource-types/aws-kinesisanalyticsv2-application";
import { _AWS_KINESISANALYTICSV2_APPLICATIONCLOUDWATCHLOGGINGOPTION } from "./cfn-resource-types/aws-kinesisanalyticsv2-applicationcloudwatchloggingoption";
import { _AWS_KINESISANALYTICSV2_APPLICATIONOUTPUT } from "./cfn-resource-types/aws-kinesisanalyticsv2-applicationoutput";
import { _AWS_KINESISANALYTICSV2_APPLICATIONREFERENCEDATASOURCE } from "./cfn-resource-types/aws-kinesisanalyticsv2-applicationreferencedatasource";
import { _AWS_KINESISFIREHOSE_DELIVERYSTREAM } from "./cfn-resource-types/aws-kinesisfirehose-deliverystream";
import { _AWS_KINESISVIDEO_SIGNALINGCHANNEL } from "./cfn-resource-types/aws-kinesisvideo-signalingchannel";
import { _AWS_KINESISVIDEO_STREAM } from "./cfn-resource-types/aws-kinesisvideo-stream";
import { _AWS_KMS_ALIAS } from "./cfn-resource-types/aws-kms-alias";
import { _AWS_KMS_KEY } from "./cfn-resource-types/aws-kms-key";
import { _AWS_KMS_REPLICAKEY } from "./cfn-resource-types/aws-kms-replicakey";
import { _AWS_LAKEFORMATION_DATACELLSFILTER } from "./cfn-resource-types/aws-lakeformation-datacellsfilter";
import { _AWS_LAKEFORMATION_DATALAKESETTINGS } from "./cfn-resource-types/aws-lakeformation-datalakesettings";
import { _AWS_LAKEFORMATION_PERMISSIONS } from "./cfn-resource-types/aws-lakeformation-permissions";
import { _AWS_LAKEFORMATION_PRINCIPALPERMISSIONS } from "./cfn-resource-types/aws-lakeformation-principalpermissions";
import { _AWS_LAKEFORMATION_RESOURCE } from "./cfn-resource-types/aws-lakeformation-resource";
import { _AWS_LAKEFORMATION_TAG } from "./cfn-resource-types/aws-lakeformation-tag";
import { _AWS_LAKEFORMATION_TAGASSOCIATION } from "./cfn-resource-types/aws-lakeformation-tagassociation";
import { _AWS_LAMBDA_ALIAS } from "./cfn-resource-types/aws-lambda-alias";
import { _AWS_LAMBDA_CODESIGNINGCONFIG } from "./cfn-resource-types/aws-lambda-codesigningconfig";
import { _AWS_LAMBDA_EVENTINVOKECONFIG } from "./cfn-resource-types/aws-lambda-eventinvokeconfig";
import { _AWS_LAMBDA_EVENTSOURCEMAPPING } from "./cfn-resource-types/aws-lambda-eventsourcemapping";
import { _AWS_LAMBDA_FUNCTION } from "./cfn-resource-types/aws-lambda-function";
import { _AWS_LAMBDA_LAYERVERSION } from "./cfn-resource-types/aws-lambda-layerversion";
import { _AWS_LAMBDA_LAYERVERSIONPERMISSION } from "./cfn-resource-types/aws-lambda-layerversionpermission";
import { _AWS_LAMBDA_PERMISSION } from "./cfn-resource-types/aws-lambda-permission";
import { _AWS_LAMBDA_URL } from "./cfn-resource-types/aws-lambda-url";
import { _AWS_LAMBDA_VERSION } from "./cfn-resource-types/aws-lambda-version";
import { _AWS_LAUNCHWIZARD_DEPLOYMENT } from "./cfn-resource-types/aws-launchwizard-deployment";
import { _AWS_LEX_BOT } from "./cfn-resource-types/aws-lex-bot";
import { _AWS_LEX_BOTALIAS } from "./cfn-resource-types/aws-lex-botalias";
import { _AWS_LEX_BOTVERSION } from "./cfn-resource-types/aws-lex-botversion";
import { _AWS_LEX_RESOURCEPOLICY } from "./cfn-resource-types/aws-lex-resourcepolicy";
import { _AWS_LICENSEMANAGER_GRANT } from "./cfn-resource-types/aws-licensemanager-grant";
import { _AWS_LICENSEMANAGER_LICENSE } from "./cfn-resource-types/aws-licensemanager-license";
import { _AWS_LIGHTSAIL_ALARM } from "./cfn-resource-types/aws-lightsail-alarm";
import { _AWS_LIGHTSAIL_BUCKET } from "./cfn-resource-types/aws-lightsail-bucket";
import { _AWS_LIGHTSAIL_CERTIFICATE } from "./cfn-resource-types/aws-lightsail-certificate";
import { _AWS_LIGHTSAIL_CONTAINER } from "./cfn-resource-types/aws-lightsail-container";
import { _AWS_LIGHTSAIL_DATABASE } from "./cfn-resource-types/aws-lightsail-database";
import { _AWS_LIGHTSAIL_DISK } from "./cfn-resource-types/aws-lightsail-disk";
import { _AWS_LIGHTSAIL_DISTRIBUTION } from "./cfn-resource-types/aws-lightsail-distribution";
import { _AWS_LIGHTSAIL_INSTANCE } from "./cfn-resource-types/aws-lightsail-instance";
import { _AWS_LIGHTSAIL_LOADBALANCER } from "./cfn-resource-types/aws-lightsail-loadbalancer";
import { _AWS_LIGHTSAIL_LOADBALANCERTLSCERTIFICATE } from "./cfn-resource-types/aws-lightsail-loadbalancertlscertificate";
import { _AWS_LIGHTSAIL_STATICIP } from "./cfn-resource-types/aws-lightsail-staticip";
import { _AWS_LOCATION_APIKEY } from "./cfn-resource-types/aws-location-apikey";
import { _AWS_LOCATION_GEOFENCECOLLECTION } from "./cfn-resource-types/aws-location-geofencecollection";
import { _AWS_LOCATION_MAP } from "./cfn-resource-types/aws-location-map";
import { _AWS_LOCATION_PLACEINDEX } from "./cfn-resource-types/aws-location-placeindex";
import { _AWS_LOCATION_ROUTECALCULATOR } from "./cfn-resource-types/aws-location-routecalculator";
import { _AWS_LOCATION_TRACKER } from "./cfn-resource-types/aws-location-tracker";
import { _AWS_LOCATION_TRACKERCONSUMER } from "./cfn-resource-types/aws-location-trackerconsumer";
import { _AWS_LOGS_ACCOUNTPOLICY } from "./cfn-resource-types/aws-logs-accountpolicy";
import { _AWS_LOGS_DELIVERY } from "./cfn-resource-types/aws-logs-delivery";
import { _AWS_LOGS_DELIVERYDESTINATION } from "./cfn-resource-types/aws-logs-deliverydestination";
import { _AWS_LOGS_DELIVERYSOURCE } from "./cfn-resource-types/aws-logs-deliverysource";
import { _AWS_LOGS_DESTINATION } from "./cfn-resource-types/aws-logs-destination";
import { _AWS_LOGS_LOGANOMALYDETECTOR } from "./cfn-resource-types/aws-logs-loganomalydetector";
import { _AWS_LOGS_LOGGROUP } from "./cfn-resource-types/aws-logs-loggroup";
import { _AWS_LOGS_LOGSTREAM } from "./cfn-resource-types/aws-logs-logstream";
import { _AWS_LOGS_METRICFILTER } from "./cfn-resource-types/aws-logs-metricfilter";
import { _AWS_LOGS_QUERYDEFINITION } from "./cfn-resource-types/aws-logs-querydefinition";
import { _AWS_LOGS_RESOURCEPOLICY } from "./cfn-resource-types/aws-logs-resourcepolicy";
import { _AWS_LOGS_SUBSCRIPTIONFILTER } from "./cfn-resource-types/aws-logs-subscriptionfilter";
import { _AWS_LOOKOUTEQUIPMENT_INFERENCESCHEDULER } from "./cfn-resource-types/aws-lookoutequipment-inferencescheduler";
import { _AWS_LOOKOUTMETRICS_ALERT } from "./cfn-resource-types/aws-lookoutmetrics-alert";
import { _AWS_LOOKOUTMETRICS_ANOMALYDETECTOR } from "./cfn-resource-types/aws-lookoutmetrics-anomalydetector";
import { _AWS_LOOKOUTVISION_PROJECT } from "./cfn-resource-types/aws-lookoutvision-project";
import { _AWS_M2_APPLICATION } from "./cfn-resource-types/aws-m2-application";
import { _AWS_M2_ENVIRONMENT } from "./cfn-resource-types/aws-m2-environment";
import { _AWS_MACIE_ALLOWLIST } from "./cfn-resource-types/aws-macie-allowlist";
import { _AWS_MACIE_CUSTOMDATAIDENTIFIER } from "./cfn-resource-types/aws-macie-customdataidentifier";
import { _AWS_MACIE_FINDINGSFILTER } from "./cfn-resource-types/aws-macie-findingsfilter";
import { _AWS_MACIE_SESSION } from "./cfn-resource-types/aws-macie-session";
import { _AWS_MANAGEDBLOCKCHAIN_ACCESSOR } from "./cfn-resource-types/aws-managedblockchain-accessor";
import { _AWS_MANAGEDBLOCKCHAIN_MEMBER } from "./cfn-resource-types/aws-managedblockchain-member";
import { _AWS_MANAGEDBLOCKCHAIN_NODE } from "./cfn-resource-types/aws-managedblockchain-node";
import { _AWS_MEDIACONNECT_BRIDGE } from "./cfn-resource-types/aws-mediaconnect-bridge";
import { _AWS_MEDIACONNECT_BRIDGEOUTPUT } from "./cfn-resource-types/aws-mediaconnect-bridgeoutput";
import { _AWS_MEDIACONNECT_BRIDGESOURCE } from "./cfn-resource-types/aws-mediaconnect-bridgesource";
import { _AWS_MEDIACONNECT_FLOW } from "./cfn-resource-types/aws-mediaconnect-flow";
import { _AWS_MEDIACONNECT_FLOWENTITLEMENT } from "./cfn-resource-types/aws-mediaconnect-flowentitlement";
import { _AWS_MEDIACONNECT_FLOWOUTPUT } from "./cfn-resource-types/aws-mediaconnect-flowoutput";
import { _AWS_MEDIACONNECT_FLOWSOURCE } from "./cfn-resource-types/aws-mediaconnect-flowsource";
import { _AWS_MEDIACONNECT_FLOWVPCINTERFACE } from "./cfn-resource-types/aws-mediaconnect-flowvpcinterface";
import { _AWS_MEDIACONNECT_GATEWAY } from "./cfn-resource-types/aws-mediaconnect-gateway";
import { _AWS_MEDIACONVERT_JOBTEMPLATE } from "./cfn-resource-types/aws-mediaconvert-jobtemplate";
import { _AWS_MEDIACONVERT_PRESET } from "./cfn-resource-types/aws-mediaconvert-preset";
import { _AWS_MEDIACONVERT_QUEUE } from "./cfn-resource-types/aws-mediaconvert-queue";
import { _AWS_MEDIALIVE_CHANNEL } from "./cfn-resource-types/aws-medialive-channel";
import { _AWS_MEDIALIVE_CHANNELPLACEMENTGROUP } from "./cfn-resource-types/aws-medialive-channelplacementgroup";
import { _AWS_MEDIALIVE_CLOUDWATCHALARMTEMPLATE } from "./cfn-resource-types/aws-medialive-cloudwatchalarmtemplate";
import { _AWS_MEDIALIVE_CLOUDWATCHALARMTEMPLATEGROUP } from "./cfn-resource-types/aws-medialive-cloudwatchalarmtemplategroup";
import { _AWS_MEDIALIVE_CLUSTER } from "./cfn-resource-types/aws-medialive-cluster";
import { _AWS_MEDIALIVE_EVENTBRIDGERULETEMPLATE } from "./cfn-resource-types/aws-medialive-eventbridgeruletemplate";
import { _AWS_MEDIALIVE_EVENTBRIDGERULETEMPLATEGROUP } from "./cfn-resource-types/aws-medialive-eventbridgeruletemplategroup";
import { _AWS_MEDIALIVE_INPUT } from "./cfn-resource-types/aws-medialive-input";
import { _AWS_MEDIALIVE_INPUTSECURITYGROUP } from "./cfn-resource-types/aws-medialive-inputsecuritygroup";
import { _AWS_MEDIALIVE_MULTIPLEX } from "./cfn-resource-types/aws-medialive-multiplex";
import { _AWS_MEDIALIVE_MULTIPLEXPROGRAM } from "./cfn-resource-types/aws-medialive-multiplexprogram";
import { _AWS_MEDIALIVE_NETWORK } from "./cfn-resource-types/aws-medialive-network";
import { _AWS_MEDIALIVE_SDISOURCE } from "./cfn-resource-types/aws-medialive-sdisource";
import { _AWS_MEDIALIVE_SIGNALMAP } from "./cfn-resource-types/aws-medialive-signalmap";
import { _AWS_MEDIAPACKAGE_ASSET } from "./cfn-resource-types/aws-mediapackage-asset";
import { _AWS_MEDIAPACKAGE_CHANNEL } from "./cfn-resource-types/aws-mediapackage-channel";
import { _AWS_MEDIAPACKAGE_ORIGINENDPOINT } from "./cfn-resource-types/aws-mediapackage-originendpoint";
import { _AWS_MEDIAPACKAGE_PACKAGINGCONFIGURATION } from "./cfn-resource-types/aws-mediapackage-packagingconfiguration";
import { _AWS_MEDIAPACKAGE_PACKAGINGGROUP } from "./cfn-resource-types/aws-mediapackage-packaginggroup";
import { _AWS_MEDIAPACKAGEV2_CHANNEL } from "./cfn-resource-types/aws-mediapackagev2-channel";
import { _AWS_MEDIAPACKAGEV2_CHANNELGROUP } from "./cfn-resource-types/aws-mediapackagev2-channelgroup";
import { _AWS_MEDIAPACKAGEV2_CHANNELPOLICY } from "./cfn-resource-types/aws-mediapackagev2-channelpolicy";
import { _AWS_MEDIAPACKAGEV2_ORIGINENDPOINT } from "./cfn-resource-types/aws-mediapackagev2-originendpoint";
import { _AWS_MEDIAPACKAGEV2_ORIGINENDPOINTPOLICY } from "./cfn-resource-types/aws-mediapackagev2-originendpointpolicy";
import { _AWS_MEDIASTORE_CONTAINER } from "./cfn-resource-types/aws-mediastore-container";
import { _AWS_MEDIATAILOR_CHANNEL } from "./cfn-resource-types/aws-mediatailor-channel";
import { _AWS_MEDIATAILOR_CHANNELPOLICY } from "./cfn-resource-types/aws-mediatailor-channelpolicy";
import { _AWS_MEDIATAILOR_LIVESOURCE } from "./cfn-resource-types/aws-mediatailor-livesource";
import { _AWS_MEDIATAILOR_PLAYBACKCONFIGURATION } from "./cfn-resource-types/aws-mediatailor-playbackconfiguration";
import { _AWS_MEDIATAILOR_SOURCELOCATION } from "./cfn-resource-types/aws-mediatailor-sourcelocation";
import { _AWS_MEDIATAILOR_VODSOURCE } from "./cfn-resource-types/aws-mediatailor-vodsource";
import { _AWS_MEMORYDB_ACL } from "./cfn-resource-types/aws-memorydb-acl";
import { _AWS_MEMORYDB_CLUSTER } from "./cfn-resource-types/aws-memorydb-cluster";
import { _AWS_MEMORYDB_PARAMETERGROUP } from "./cfn-resource-types/aws-memorydb-parametergroup";
import { _AWS_MEMORYDB_SUBNETGROUP } from "./cfn-resource-types/aws-memorydb-subnetgroup";
import { _AWS_MEMORYDB_USER } from "./cfn-resource-types/aws-memorydb-user";
import { _AWS_MSK_BATCHSCRAMSECRET } from "./cfn-resource-types/aws-msk-batchscramsecret";
import { _AWS_MSK_CLUSTER } from "./cfn-resource-types/aws-msk-cluster";
import { _AWS_MSK_CLUSTERPOLICY } from "./cfn-resource-types/aws-msk-clusterpolicy";
import { _AWS_MSK_CONFIGURATION } from "./cfn-resource-types/aws-msk-configuration";
import { _AWS_MSK_REPLICATOR } from "./cfn-resource-types/aws-msk-replicator";
import { _AWS_MSK_SERVERLESSCLUSTER } from "./cfn-resource-types/aws-msk-serverlesscluster";
import { _AWS_MSK_VPCCONNECTION } from "./cfn-resource-types/aws-msk-vpcconnection";
import { _AWS_MWAA_ENVIRONMENT } from "./cfn-resource-types/aws-mwaa-environment";
import { _AWS_NEPTUNE_DBCLUSTER } from "./cfn-resource-types/aws-neptune-dbcluster";
import { _AWS_NEPTUNE_DBCLUSTERPARAMETERGROUP } from "./cfn-resource-types/aws-neptune-dbclusterparametergroup";
import { _AWS_NEPTUNE_DBINSTANCE } from "./cfn-resource-types/aws-neptune-dbinstance";
import { _AWS_NEPTUNE_DBPARAMETERGROUP } from "./cfn-resource-types/aws-neptune-dbparametergroup";
import { _AWS_NEPTUNE_DBSUBNETGROUP } from "./cfn-resource-types/aws-neptune-dbsubnetgroup";
import { _AWS_NEPTUNE_EVENTSUBSCRIPTION } from "./cfn-resource-types/aws-neptune-eventsubscription";
import { _AWS_NEPTUNEGRAPH_GRAPH } from "./cfn-resource-types/aws-neptunegraph-graph";
import { _AWS_NEPTUNEGRAPH_PRIVATEGRAPHENDPOINT } from "./cfn-resource-types/aws-neptunegraph-privategraphendpoint";
import { _AWS_NETWORKFIREWALL_FIREWALL } from "./cfn-resource-types/aws-networkfirewall-firewall";
import { _AWS_NETWORKFIREWALL_FIREWALLPOLICY } from "./cfn-resource-types/aws-networkfirewall-firewallpolicy";
import { _AWS_NETWORKFIREWALL_LOGGINGCONFIGURATION } from "./cfn-resource-types/aws-networkfirewall-loggingconfiguration";
import { _AWS_NETWORKFIREWALL_RULEGROUP } from "./cfn-resource-types/aws-networkfirewall-rulegroup";
import { _AWS_NETWORKFIREWALL_TLSINSPECTIONCONFIGURATION } from "./cfn-resource-types/aws-networkfirewall-tlsinspectionconfiguration";
import { _AWS_NETWORKMANAGER_CONNECTATTACHMENT } from "./cfn-resource-types/aws-networkmanager-connectattachment";
import { _AWS_NETWORKMANAGER_CONNECTPEER } from "./cfn-resource-types/aws-networkmanager-connectpeer";
import { _AWS_NETWORKMANAGER_CORENETWORK } from "./cfn-resource-types/aws-networkmanager-corenetwork";
import { _AWS_NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION } from "./cfn-resource-types/aws-networkmanager-customergatewayassociation";
import { _AWS_NETWORKMANAGER_DEVICE } from "./cfn-resource-types/aws-networkmanager-device";
import { _AWS_NETWORKMANAGER_GLOBALNETWORK } from "./cfn-resource-types/aws-networkmanager-globalnetwork";
import { _AWS_NETWORKMANAGER_LINK } from "./cfn-resource-types/aws-networkmanager-link";
import { _AWS_NETWORKMANAGER_LINKASSOCIATION } from "./cfn-resource-types/aws-networkmanager-linkassociation";
import { _AWS_NETWORKMANAGER_SITE } from "./cfn-resource-types/aws-networkmanager-site";
import { _AWS_NETWORKMANAGER_SITETOSITEVPNATTACHMENT } from "./cfn-resource-types/aws-networkmanager-sitetositevpnattachment";
import { _AWS_NETWORKMANAGER_TRANSITGATEWAYPEERING } from "./cfn-resource-types/aws-networkmanager-transitgatewaypeering";
import { _AWS_NETWORKMANAGER_TRANSITGATEWAYREGISTRATION } from "./cfn-resource-types/aws-networkmanager-transitgatewayregistration";
import { _AWS_NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT } from "./cfn-resource-types/aws-networkmanager-transitgatewayroutetableattachment";
import { _AWS_NETWORKMANAGER_VPCATTACHMENT } from "./cfn-resource-types/aws-networkmanager-vpcattachment";
import { _AWS_NIMBLESTUDIO_LAUNCHPROFILE } from "./cfn-resource-types/aws-nimblestudio-launchprofile";
import { _AWS_NIMBLESTUDIO_STREAMINGIMAGE } from "./cfn-resource-types/aws-nimblestudio-streamingimage";
import { _AWS_NIMBLESTUDIO_STUDIO } from "./cfn-resource-types/aws-nimblestudio-studio";
import { _AWS_NIMBLESTUDIO_STUDIOCOMPONENT } from "./cfn-resource-types/aws-nimblestudio-studiocomponent";
import { _AWS_OAM_LINK } from "./cfn-resource-types/aws-oam-link";
import { _AWS_OAM_SINK } from "./cfn-resource-types/aws-oam-sink";
import { _AWS_OMICS_ANNOTATIONSTORE } from "./cfn-resource-types/aws-omics-annotationstore";
import { _AWS_OMICS_REFERENCESTORE } from "./cfn-resource-types/aws-omics-referencestore";
import { _AWS_OMICS_RUNGROUP } from "./cfn-resource-types/aws-omics-rungroup";
import { _AWS_OMICS_SEQUENCESTORE } from "./cfn-resource-types/aws-omics-sequencestore";
import { _AWS_OMICS_VARIANTSTORE } from "./cfn-resource-types/aws-omics-variantstore";
import { _AWS_OMICS_WORKFLOW } from "./cfn-resource-types/aws-omics-workflow";
import { _AWS_OPENSEARCHSERVERLESS_ACCESSPOLICY } from "./cfn-resource-types/aws-opensearchserverless-accesspolicy";
import { _AWS_OPENSEARCHSERVERLESS_COLLECTION } from "./cfn-resource-types/aws-opensearchserverless-collection";
import { _AWS_OPENSEARCHSERVERLESS_LIFECYCLEPOLICY } from "./cfn-resource-types/aws-opensearchserverless-lifecyclepolicy";
import { _AWS_OPENSEARCHSERVERLESS_SECURITYCONFIG } from "./cfn-resource-types/aws-opensearchserverless-securityconfig";
import { _AWS_OPENSEARCHSERVERLESS_SECURITYPOLICY } from "./cfn-resource-types/aws-opensearchserverless-securitypolicy";
import { _AWS_OPENSEARCHSERVERLESS_VPCENDPOINT } from "./cfn-resource-types/aws-opensearchserverless-vpcendpoint";
import { _AWS_OPENSEARCHSERVICE_DOMAIN } from "./cfn-resource-types/aws-opensearchservice-domain";
import { _AWS_OPSWORKS_APP } from "./cfn-resource-types/aws-opsworks-app";
import { _AWS_OPSWORKS_ELASTICLOADBALANCERATTACHMENT } from "./cfn-resource-types/aws-opsworks-elasticloadbalancerattachment";
import { _AWS_OPSWORKS_INSTANCE } from "./cfn-resource-types/aws-opsworks-instance";
import { _AWS_OPSWORKS_LAYER } from "./cfn-resource-types/aws-opsworks-layer";
import { _AWS_OPSWORKS_STACK } from "./cfn-resource-types/aws-opsworks-stack";
import { _AWS_OPSWORKS_USERPROFILE } from "./cfn-resource-types/aws-opsworks-userprofile";
import { _AWS_OPSWORKS_VOLUME } from "./cfn-resource-types/aws-opsworks-volume";
import { _AWS_OPSWORKSCM_SERVER } from "./cfn-resource-types/aws-opsworkscm-server";
import { _AWS_ORGANIZATIONS_ACCOUNT } from "./cfn-resource-types/aws-organizations-account";
import { _AWS_ORGANIZATIONS_ORGANIZATION } from "./cfn-resource-types/aws-organizations-organization";
import { _AWS_ORGANIZATIONS_ORGANIZATIONALUNIT } from "./cfn-resource-types/aws-organizations-organizationalunit";
import { _AWS_ORGANIZATIONS_POLICY } from "./cfn-resource-types/aws-organizations-policy";
import { _AWS_ORGANIZATIONS_RESOURCEPOLICY } from "./cfn-resource-types/aws-organizations-resourcepolicy";
import { _AWS_OSIS_PIPELINE } from "./cfn-resource-types/aws-osis-pipeline";
import { _AWS_PANORAMA_APPLICATIONINSTANCE } from "./cfn-resource-types/aws-panorama-applicationinstance";
import { _AWS_PANORAMA_PACKAGE } from "./cfn-resource-types/aws-panorama-package";
import { _AWS_PANORAMA_PACKAGEVERSION } from "./cfn-resource-types/aws-panorama-packageversion";
import { _AWS_PAYMENTCRYPTOGRAPHY_ALIAS } from "./cfn-resource-types/aws-paymentcryptography-alias";
import { _AWS_PAYMENTCRYPTOGRAPHY_KEY } from "./cfn-resource-types/aws-paymentcryptography-key";
import { _AWS_PCACONNECTORAD_CONNECTOR } from "./cfn-resource-types/aws-pcaconnectorad-connector";
import { _AWS_PCACONNECTORAD_DIRECTORYREGISTRATION } from "./cfn-resource-types/aws-pcaconnectorad-directoryregistration";
import { _AWS_PCACONNECTORAD_SERVICEPRINCIPALNAME } from "./cfn-resource-types/aws-pcaconnectorad-serviceprincipalname";
import { _AWS_PCACONNECTORAD_TEMPLATE } from "./cfn-resource-types/aws-pcaconnectorad-template";
import { _AWS_PCACONNECTORAD_TEMPLATEGROUPACCESSCONTROLENTRY } from "./cfn-resource-types/aws-pcaconnectorad-templategroupaccesscontrolentry";
import { _AWS_PCACONNECTORSCEP_CHALLENGE } from "./cfn-resource-types/aws-pcaconnectorscep-challenge";
import { _AWS_PCACONNECTORSCEP_CONNECTOR } from "./cfn-resource-types/aws-pcaconnectorscep-connector";
import { _AWS_PERSONALIZE_DATASET } from "./cfn-resource-types/aws-personalize-dataset";
import { _AWS_PERSONALIZE_DATASETGROUP } from "./cfn-resource-types/aws-personalize-datasetgroup";
import { _AWS_PERSONALIZE_SCHEMA } from "./cfn-resource-types/aws-personalize-schema";
import { _AWS_PERSONALIZE_SOLUTION } from "./cfn-resource-types/aws-personalize-solution";
import { _AWS_PINPOINT_ADMCHANNEL } from "./cfn-resource-types/aws-pinpoint-admchannel";
import { _AWS_PINPOINT_APNSCHANNEL } from "./cfn-resource-types/aws-pinpoint-apnschannel";
import { _AWS_PINPOINT_APNSSANDBOXCHANNEL } from "./cfn-resource-types/aws-pinpoint-apnssandboxchannel";
import { _AWS_PINPOINT_APNSVOIPCHANNEL } from "./cfn-resource-types/aws-pinpoint-apnsvoipchannel";
import { _AWS_PINPOINT_APNSVOIPSANDBOXCHANNEL } from "./cfn-resource-types/aws-pinpoint-apnsvoipsandboxchannel";
import { _AWS_PINPOINT_APP } from "./cfn-resource-types/aws-pinpoint-app";
import { _AWS_PINPOINT_APPLICATIONSETTINGS } from "./cfn-resource-types/aws-pinpoint-applicationsettings";
import { _AWS_PINPOINT_BAIDUCHANNEL } from "./cfn-resource-types/aws-pinpoint-baiduchannel";
import { _AWS_PINPOINT_CAMPAIGN } from "./cfn-resource-types/aws-pinpoint-campaign";
import { _AWS_PINPOINT_EMAILCHANNEL } from "./cfn-resource-types/aws-pinpoint-emailchannel";
import { _AWS_PINPOINT_EMAILTEMPLATE } from "./cfn-resource-types/aws-pinpoint-emailtemplate";
import { _AWS_PINPOINT_EVENTSTREAM } from "./cfn-resource-types/aws-pinpoint-eventstream";
import { _AWS_PINPOINT_GCMCHANNEL } from "./cfn-resource-types/aws-pinpoint-gcmchannel";
import { _AWS_PINPOINT_INAPPTEMPLATE } from "./cfn-resource-types/aws-pinpoint-inapptemplate";
import { _AWS_PINPOINT_PUSHTEMPLATE } from "./cfn-resource-types/aws-pinpoint-pushtemplate";
import { _AWS_PINPOINT_SEGMENT } from "./cfn-resource-types/aws-pinpoint-segment";
import { _AWS_PINPOINT_SMSCHANNEL } from "./cfn-resource-types/aws-pinpoint-smschannel";
import { _AWS_PINPOINT_SMSTEMPLATE } from "./cfn-resource-types/aws-pinpoint-smstemplate";
import { _AWS_PINPOINT_VOICECHANNEL } from "./cfn-resource-types/aws-pinpoint-voicechannel";
import { _AWS_PINPOINTEMAIL_CONFIGURATIONSET } from "./cfn-resource-types/aws-pinpointemail-configurationset";
import { _AWS_PINPOINTEMAIL_CONFIGURATIONSETEVENTDESTINATION } from "./cfn-resource-types/aws-pinpointemail-configurationseteventdestination";
import { _AWS_PINPOINTEMAIL_DEDICATEDIPPOOL } from "./cfn-resource-types/aws-pinpointemail-dedicatedippool";
import { _AWS_PINPOINTEMAIL_IDENTITY } from "./cfn-resource-types/aws-pinpointemail-identity";
import { _AWS_PIPES_PIPE } from "./cfn-resource-types/aws-pipes-pipe";
import { _AWS_PROTON_ENVIRONMENTACCOUNTCONNECTION } from "./cfn-resource-types/aws-proton-environmentaccountconnection";
import { _AWS_PROTON_ENVIRONMENTTEMPLATE } from "./cfn-resource-types/aws-proton-environmenttemplate";
import { _AWS_PROTON_SERVICETEMPLATE } from "./cfn-resource-types/aws-proton-servicetemplate";
import { _AWS_QBUSINESS_APPLICATION } from "./cfn-resource-types/aws-qbusiness-application";
import { _AWS_QBUSINESS_DATASOURCE } from "./cfn-resource-types/aws-qbusiness-datasource";
import { _AWS_QBUSINESS_INDEX } from "./cfn-resource-types/aws-qbusiness-index";
import { _AWS_QBUSINESS_PLUGIN } from "./cfn-resource-types/aws-qbusiness-plugin";
import { _AWS_QBUSINESS_RETRIEVER } from "./cfn-resource-types/aws-qbusiness-retriever";
import { _AWS_QBUSINESS_WEBEXPERIENCE } from "./cfn-resource-types/aws-qbusiness-webexperience";
import { _AWS_QLDB_LEDGER } from "./cfn-resource-types/aws-qldb-ledger";
import { _AWS_QLDB_STREAM } from "./cfn-resource-types/aws-qldb-stream";
import { _AWS_QUICKSIGHT_ANALYSIS } from "./cfn-resource-types/aws-quicksight-analysis";
import { _AWS_QUICKSIGHT_DASHBOARD } from "./cfn-resource-types/aws-quicksight-dashboard";
import { _AWS_QUICKSIGHT_DATASET } from "./cfn-resource-types/aws-quicksight-dataset";
import { _AWS_QUICKSIGHT_DATASOURCE } from "./cfn-resource-types/aws-quicksight-datasource";
import { _AWS_QUICKSIGHT_REFRESHSCHEDULE } from "./cfn-resource-types/aws-quicksight-refreshschedule";
import { _AWS_QUICKSIGHT_TEMPLATE } from "./cfn-resource-types/aws-quicksight-template";
import { _AWS_QUICKSIGHT_THEME } from "./cfn-resource-types/aws-quicksight-theme";
import { _AWS_QUICKSIGHT_TOPIC } from "./cfn-resource-types/aws-quicksight-topic";
import { _AWS_QUICKSIGHT_VPCCONNECTION } from "./cfn-resource-types/aws-quicksight-vpcconnection";
import { _AWS_RAM_PERMISSION } from "./cfn-resource-types/aws-ram-permission";
import { _AWS_RAM_RESOURCESHARE } from "./cfn-resource-types/aws-ram-resourceshare";
import { _AWS_RDS_CUSTOMDBENGINEVERSION } from "./cfn-resource-types/aws-rds-customdbengineversion";
import { _AWS_RDS_DBCLUSTER } from "./cfn-resource-types/aws-rds-dbcluster";
import { _AWS_RDS_DBCLUSTERPARAMETERGROUP } from "./cfn-resource-types/aws-rds-dbclusterparametergroup";
import { _AWS_RDS_DBINSTANCE } from "./cfn-resource-types/aws-rds-dbinstance";
import { _AWS_RDS_DBPARAMETERGROUP } from "./cfn-resource-types/aws-rds-dbparametergroup";
import { _AWS_RDS_DBPROXY } from "./cfn-resource-types/aws-rds-dbproxy";
import { _AWS_RDS_DBPROXYENDPOINT } from "./cfn-resource-types/aws-rds-dbproxyendpoint";
import { _AWS_RDS_DBPROXYTARGETGROUP } from "./cfn-resource-types/aws-rds-dbproxytargetgroup";
import { _AWS_RDS_DBSECURITYGROUP } from "./cfn-resource-types/aws-rds-dbsecuritygroup";
import { _AWS_RDS_DBSECURITYGROUPINGRESS } from "./cfn-resource-types/aws-rds-dbsecuritygroupingress";
import { _AWS_RDS_DBSUBNETGROUP } from "./cfn-resource-types/aws-rds-dbsubnetgroup";
import { _AWS_RDS_EVENTSUBSCRIPTION } from "./cfn-resource-types/aws-rds-eventsubscription";
import { _AWS_RDS_GLOBALCLUSTER } from "./cfn-resource-types/aws-rds-globalcluster";
import { _AWS_RDS_INTEGRATION } from "./cfn-resource-types/aws-rds-integration";
import { _AWS_RDS_OPTIONGROUP } from "./cfn-resource-types/aws-rds-optiongroup";
import { _AWS_REDSHIFT_CLUSTER } from "./cfn-resource-types/aws-redshift-cluster";
import { _AWS_REDSHIFT_CLUSTERPARAMETERGROUP } from "./cfn-resource-types/aws-redshift-clusterparametergroup";
import { _AWS_REDSHIFT_CLUSTERSECURITYGROUP } from "./cfn-resource-types/aws-redshift-clustersecuritygroup";
import { _AWS_REDSHIFT_CLUSTERSECURITYGROUPINGRESS } from "./cfn-resource-types/aws-redshift-clustersecuritygroupingress";
import { _AWS_REDSHIFT_CLUSTERSUBNETGROUP } from "./cfn-resource-types/aws-redshift-clustersubnetgroup";
import { _AWS_REDSHIFT_ENDPOINTACCESS } from "./cfn-resource-types/aws-redshift-endpointaccess";
import { _AWS_REDSHIFT_ENDPOINTAUTHORIZATION } from "./cfn-resource-types/aws-redshift-endpointauthorization";
import { _AWS_REDSHIFT_EVENTSUBSCRIPTION } from "./cfn-resource-types/aws-redshift-eventsubscription";
import { _AWS_REDSHIFT_SCHEDULEDACTION } from "./cfn-resource-types/aws-redshift-scheduledaction";
import { _AWS_REDSHIFTSERVERLESS_NAMESPACE } from "./cfn-resource-types/aws-redshiftserverless-namespace";
import { _AWS_REDSHIFTSERVERLESS_WORKGROUP } from "./cfn-resource-types/aws-redshiftserverless-workgroup";
import { _AWS_REFACTORSPACES_APPLICATION } from "./cfn-resource-types/aws-refactorspaces-application";
import { _AWS_REFACTORSPACES_ENVIRONMENT } from "./cfn-resource-types/aws-refactorspaces-environment";
import { _AWS_REFACTORSPACES_ROUTE } from "./cfn-resource-types/aws-refactorspaces-route";
import { _AWS_REFACTORSPACES_SERVICE } from "./cfn-resource-types/aws-refactorspaces-service";
import { _AWS_REKOGNITION_COLLECTION } from "./cfn-resource-types/aws-rekognition-collection";
import { _AWS_REKOGNITION_PROJECT } from "./cfn-resource-types/aws-rekognition-project";
import { _AWS_REKOGNITION_STREAMPROCESSOR } from "./cfn-resource-types/aws-rekognition-streamprocessor";
import { _AWS_RESILIENCEHUB_APP } from "./cfn-resource-types/aws-resiliencehub-app";
import { _AWS_RESILIENCEHUB_RESILIENCYPOLICY } from "./cfn-resource-types/aws-resiliencehub-resiliencypolicy";
import { _AWS_RESOURCEEXPLORER2_DEFAULTVIEWASSOCIATION } from "./cfn-resource-types/aws-resourceexplorer2-defaultviewassociation";
import { _AWS_RESOURCEEXPLORER2_INDEX } from "./cfn-resource-types/aws-resourceexplorer2-index";
import { _AWS_RESOURCEEXPLORER2_VIEW } from "./cfn-resource-types/aws-resourceexplorer2-view";
import { _AWS_RESOURCEGROUPS_GROUP } from "./cfn-resource-types/aws-resourcegroups-group";
import { _AWS_ROBOMAKER_FLEET } from "./cfn-resource-types/aws-robomaker-fleet";
import { _AWS_ROBOMAKER_ROBOT } from "./cfn-resource-types/aws-robomaker-robot";
import { _AWS_ROBOMAKER_ROBOTAPPLICATION } from "./cfn-resource-types/aws-robomaker-robotapplication";
import { _AWS_ROBOMAKER_ROBOTAPPLICATIONVERSION } from "./cfn-resource-types/aws-robomaker-robotapplicationversion";
import { _AWS_ROBOMAKER_SIMULATIONAPPLICATION } from "./cfn-resource-types/aws-robomaker-simulationapplication";
import { _AWS_ROBOMAKER_SIMULATIONAPPLICATIONVERSION } from "./cfn-resource-types/aws-robomaker-simulationapplicationversion";
import { _AWS_ROLESANYWHERE_CRL } from "./cfn-resource-types/aws-rolesanywhere-crl";
import { _AWS_ROLESANYWHERE_PROFILE } from "./cfn-resource-types/aws-rolesanywhere-profile";
import { _AWS_ROLESANYWHERE_TRUSTANCHOR } from "./cfn-resource-types/aws-rolesanywhere-trustanchor";
import { _AWS_ROUTE53_CIDRCOLLECTION } from "./cfn-resource-types/aws-route53-cidrcollection";
import { _AWS_ROUTE53_DNSSEC } from "./cfn-resource-types/aws-route53-dnssec";
import { _AWS_ROUTE53_HEALTHCHECK } from "./cfn-resource-types/aws-route53-healthcheck";
import { _AWS_ROUTE53_HOSTEDZONE } from "./cfn-resource-types/aws-route53-hostedzone";
import { _AWS_ROUTE53_KEYSIGNINGKEY } from "./cfn-resource-types/aws-route53-keysigningkey";
import { _AWS_ROUTE53_RECORDSET } from "./cfn-resource-types/aws-route53-recordset";
import { _AWS_ROUTE53_RECORDSETGROUP } from "./cfn-resource-types/aws-route53-recordsetgroup";
import { _AWS_ROUTE53PROFILES_PROFILE } from "./cfn-resource-types/aws-route53profiles-profile";
import { _AWS_ROUTE53PROFILES_PROFILEASSOCIATION } from "./cfn-resource-types/aws-route53profiles-profileassociation";
import { _AWS_ROUTE53PROFILES_PROFILERESOURCEASSOCIATION } from "./cfn-resource-types/aws-route53profiles-profileresourceassociation";
import { _AWS_ROUTE53RECOVERYCONTROL_CLUSTER } from "./cfn-resource-types/aws-route53recoverycontrol-cluster";
import { _AWS_ROUTE53RECOVERYCONTROL_CONTROLPANEL } from "./cfn-resource-types/aws-route53recoverycontrol-controlpanel";
import { _AWS_ROUTE53RECOVERYCONTROL_ROUTINGCONTROL } from "./cfn-resource-types/aws-route53recoverycontrol-routingcontrol";
import { _AWS_ROUTE53RECOVERYCONTROL_SAFETYRULE } from "./cfn-resource-types/aws-route53recoverycontrol-safetyrule";
import { _AWS_ROUTE53RECOVERYREADINESS_CELL } from "./cfn-resource-types/aws-route53recoveryreadiness-cell";
import { _AWS_ROUTE53RECOVERYREADINESS_READINESSCHECK } from "./cfn-resource-types/aws-route53recoveryreadiness-readinesscheck";
import { _AWS_ROUTE53RECOVERYREADINESS_RECOVERYGROUP } from "./cfn-resource-types/aws-route53recoveryreadiness-recoverygroup";
import { _AWS_ROUTE53RECOVERYREADINESS_RESOURCESET } from "./cfn-resource-types/aws-route53recoveryreadiness-resourceset";
import { _AWS_ROUTE53RESOLVER_FIREWALLDOMAINLIST } from "./cfn-resource-types/aws-route53resolver-firewalldomainlist";
import { _AWS_ROUTE53RESOLVER_FIREWALLRULEGROUP } from "./cfn-resource-types/aws-route53resolver-firewallrulegroup";
import { _AWS_ROUTE53RESOLVER_FIREWALLRULEGROUPASSOCIATION } from "./cfn-resource-types/aws-route53resolver-firewallrulegroupassociation";
import { _AWS_ROUTE53RESOLVER_OUTPOSTRESOLVER } from "./cfn-resource-types/aws-route53resolver-outpostresolver";
import { _AWS_ROUTE53RESOLVER_RESOLVERCONFIG } from "./cfn-resource-types/aws-route53resolver-resolverconfig";
import { _AWS_ROUTE53RESOLVER_RESOLVERDNSSECCONFIG } from "./cfn-resource-types/aws-route53resolver-resolverdnssecconfig";
import { _AWS_ROUTE53RESOLVER_RESOLVERENDPOINT } from "./cfn-resource-types/aws-route53resolver-resolverendpoint";
import { _AWS_ROUTE53RESOLVER_RESOLVERQUERYLOGGINGCONFIG } from "./cfn-resource-types/aws-route53resolver-resolverqueryloggingconfig";
import { _AWS_ROUTE53RESOLVER_RESOLVERQUERYLOGGINGCONFIGASSOCIATION } from "./cfn-resource-types/aws-route53resolver-resolverqueryloggingconfigassociation";
import { _AWS_ROUTE53RESOLVER_RESOLVERRULE } from "./cfn-resource-types/aws-route53resolver-resolverrule";
import { _AWS_ROUTE53RESOLVER_RESOLVERRULEASSOCIATION } from "./cfn-resource-types/aws-route53resolver-resolverruleassociation";
import { _AWS_RUM_APPMONITOR } from "./cfn-resource-types/aws-rum-appmonitor";
import { _AWS_S3_ACCESSGRANT } from "./cfn-resource-types/aws-s3-accessgrant";
import { _AWS_S3_ACCESSGRANTSINSTANCE } from "./cfn-resource-types/aws-s3-accessgrantsinstance";
import { _AWS_S3_ACCESSGRANTSLOCATION } from "./cfn-resource-types/aws-s3-accessgrantslocation";
import { _AWS_S3_ACCESSPOINT } from "./cfn-resource-types/aws-s3-accesspoint";
import { _AWS_S3_BUCKET } from "./cfn-resource-types/aws-s3-bucket";
import { _AWS_S3_BUCKETPOLICY } from "./cfn-resource-types/aws-s3-bucketpolicy";
import { _AWS_S3_MULTIREGIONACCESSPOINT } from "./cfn-resource-types/aws-s3-multiregionaccesspoint";
import { _AWS_S3_MULTIREGIONACCESSPOINTPOLICY } from "./cfn-resource-types/aws-s3-multiregionaccesspointpolicy";
import { _AWS_S3_STORAGELENS } from "./cfn-resource-types/aws-s3-storagelens";
import { _AWS_S3_STORAGELENSGROUP } from "./cfn-resource-types/aws-s3-storagelensgroup";
import { _AWS_S3EXPRESS_BUCKETPOLICY } from "./cfn-resource-types/aws-s3express-bucketpolicy";
import { _AWS_S3EXPRESS_DIRECTORYBUCKET } from "./cfn-resource-types/aws-s3express-directorybucket";
import { _AWS_S3OBJECTLAMBDA_ACCESSPOINT } from "./cfn-resource-types/aws-s3objectlambda-accesspoint";
import { _AWS_S3OBJECTLAMBDA_ACCESSPOINTPOLICY } from "./cfn-resource-types/aws-s3objectlambda-accesspointpolicy";
import { _AWS_S3OUTPOSTS_ACCESSPOINT } from "./cfn-resource-types/aws-s3outposts-accesspoint";
import { _AWS_S3OUTPOSTS_BUCKET } from "./cfn-resource-types/aws-s3outposts-bucket";
import { _AWS_S3OUTPOSTS_BUCKETPOLICY } from "./cfn-resource-types/aws-s3outposts-bucketpolicy";
import { _AWS_S3OUTPOSTS_ENDPOINT } from "./cfn-resource-types/aws-s3outposts-endpoint";
import { _AWS_SAGEMAKER_APP } from "./cfn-resource-types/aws-sagemaker-app";
import { _AWS_SAGEMAKER_APPIMAGECONFIG } from "./cfn-resource-types/aws-sagemaker-appimageconfig";
import { _AWS_SAGEMAKER_CLUSTER } from "./cfn-resource-types/aws-sagemaker-cluster";
import { _AWS_SAGEMAKER_CODEREPOSITORY } from "./cfn-resource-types/aws-sagemaker-coderepository";
import { _AWS_SAGEMAKER_DATAQUALITYJOBDEFINITION } from "./cfn-resource-types/aws-sagemaker-dataqualityjobdefinition";
import { _AWS_SAGEMAKER_DEVICE } from "./cfn-resource-types/aws-sagemaker-device";
import { _AWS_SAGEMAKER_DEVICEFLEET } from "./cfn-resource-types/aws-sagemaker-devicefleet";
import { _AWS_SAGEMAKER_DOMAIN } from "./cfn-resource-types/aws-sagemaker-domain";
import { _AWS_SAGEMAKER_ENDPOINT } from "./cfn-resource-types/aws-sagemaker-endpoint";
import { _AWS_SAGEMAKER_ENDPOINTCONFIG } from "./cfn-resource-types/aws-sagemaker-endpointconfig";
import { _AWS_SAGEMAKER_FEATUREGROUP } from "./cfn-resource-types/aws-sagemaker-featuregroup";
import { _AWS_SAGEMAKER_IMAGE } from "./cfn-resource-types/aws-sagemaker-image";
import { _AWS_SAGEMAKER_IMAGEVERSION } from "./cfn-resource-types/aws-sagemaker-imageversion";
import { _AWS_SAGEMAKER_INFERENCECOMPONENT } from "./cfn-resource-types/aws-sagemaker-inferencecomponent";
import { _AWS_SAGEMAKER_INFERENCEEXPERIMENT } from "./cfn-resource-types/aws-sagemaker-inferenceexperiment";
import { _AWS_SAGEMAKER_MLFLOWTRACKINGSERVER } from "./cfn-resource-types/aws-sagemaker-mlflowtrackingserver";
import { _AWS_SAGEMAKER_MODEL } from "./cfn-resource-types/aws-sagemaker-model";
import { _AWS_SAGEMAKER_MODELBIASJOBDEFINITION } from "./cfn-resource-types/aws-sagemaker-modelbiasjobdefinition";
import { _AWS_SAGEMAKER_MODELCARD } from "./cfn-resource-types/aws-sagemaker-modelcard";
import { _AWS_SAGEMAKER_MODELEXPLAINABILITYJOBDEFINITION } from "./cfn-resource-types/aws-sagemaker-modelexplainabilityjobdefinition";
import { _AWS_SAGEMAKER_MODELPACKAGE } from "./cfn-resource-types/aws-sagemaker-modelpackage";
import { _AWS_SAGEMAKER_MODELPACKAGEGROUP } from "./cfn-resource-types/aws-sagemaker-modelpackagegroup";
import { _AWS_SAGEMAKER_MODELQUALITYJOBDEFINITION } from "./cfn-resource-types/aws-sagemaker-modelqualityjobdefinition";
import { _AWS_SAGEMAKER_MONITORINGSCHEDULE } from "./cfn-resource-types/aws-sagemaker-monitoringschedule";
import { _AWS_SAGEMAKER_NOTEBOOKINSTANCE } from "./cfn-resource-types/aws-sagemaker-notebookinstance";
import { _AWS_SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIG } from "./cfn-resource-types/aws-sagemaker-notebookinstancelifecycleconfig";
import { _AWS_SAGEMAKER_PIPELINE } from "./cfn-resource-types/aws-sagemaker-pipeline";
import { _AWS_SAGEMAKER_PROJECT } from "./cfn-resource-types/aws-sagemaker-project";
import { _AWS_SAGEMAKER_SPACE } from "./cfn-resource-types/aws-sagemaker-space";
import { _AWS_SAGEMAKER_STUDIOLIFECYCLECONFIG } from "./cfn-resource-types/aws-sagemaker-studiolifecycleconfig";
import { _AWS_SAGEMAKER_USERPROFILE } from "./cfn-resource-types/aws-sagemaker-userprofile";
import { _AWS_SAGEMAKER_WORKTEAM } from "./cfn-resource-types/aws-sagemaker-workteam";
import { _AWS_SCHEDULER_SCHEDULE } from "./cfn-resource-types/aws-scheduler-schedule";
import { _AWS_SCHEDULER_SCHEDULEGROUP } from "./cfn-resource-types/aws-scheduler-schedulegroup";
import { _AWS_SDB_DOMAIN } from "./cfn-resource-types/aws-sdb-domain";
import { _AWS_SECRETSMANAGER_RESOURCEPOLICY } from "./cfn-resource-types/aws-secretsmanager-resourcepolicy";
import { _AWS_SECRETSMANAGER_ROTATIONSCHEDULE } from "./cfn-resource-types/aws-secretsmanager-rotationschedule";
import { _AWS_SECRETSMANAGER_SECRET } from "./cfn-resource-types/aws-secretsmanager-secret";
import { _AWS_SECRETSMANAGER_SECRETTARGETATTACHMENT } from "./cfn-resource-types/aws-secretsmanager-secrettargetattachment";
import { _AWS_SECURITYHUB_AUTOMATIONRULE } from "./cfn-resource-types/aws-securityhub-automationrule";
import { _AWS_SECURITYHUB_CONFIGURATIONPOLICY } from "./cfn-resource-types/aws-securityhub-configurationpolicy";
import { _AWS_SECURITYHUB_DELEGATEDADMIN } from "./cfn-resource-types/aws-securityhub-delegatedadmin";
import { _AWS_SECURITYHUB_FINDINGAGGREGATOR } from "./cfn-resource-types/aws-securityhub-findingaggregator";
import { _AWS_SECURITYHUB_HUB } from "./cfn-resource-types/aws-securityhub-hub";
import { _AWS_SECURITYHUB_INSIGHT } from "./cfn-resource-types/aws-securityhub-insight";
import { _AWS_SECURITYHUB_ORGANIZATIONCONFIGURATION } from "./cfn-resource-types/aws-securityhub-organizationconfiguration";
import { _AWS_SECURITYHUB_POLICYASSOCIATION } from "./cfn-resource-types/aws-securityhub-policyassociation";
import { _AWS_SECURITYHUB_PRODUCTSUBSCRIPTION } from "./cfn-resource-types/aws-securityhub-productsubscription";
import { _AWS_SECURITYHUB_SECURITYCONTROL } from "./cfn-resource-types/aws-securityhub-securitycontrol";
import { _AWS_SECURITYHUB_STANDARD } from "./cfn-resource-types/aws-securityhub-standard";
import { _AWS_SECURITYLAKE_AWSLOGSOURCE } from "./cfn-resource-types/aws-securitylake-awslogsource";
import { _AWS_SECURITYLAKE_DATALAKE } from "./cfn-resource-types/aws-securitylake-datalake";
import { _AWS_SECURITYLAKE_SUBSCRIBER } from "./cfn-resource-types/aws-securitylake-subscriber";
import { _AWS_SECURITYLAKE_SUBSCRIBERNOTIFICATION } from "./cfn-resource-types/aws-securitylake-subscribernotification";
import { _AWS_SERVICECATALOG_ACCEPTEDPORTFOLIOSHARE } from "./cfn-resource-types/aws-servicecatalog-acceptedportfolioshare";
import { _AWS_SERVICECATALOG_CLOUDFORMATIONPRODUCT } from "./cfn-resource-types/aws-servicecatalog-cloudformationproduct";
import { _AWS_SERVICECATALOG_CLOUDFORMATIONPROVISIONEDPRODUCT } from "./cfn-resource-types/aws-servicecatalog-cloudformationprovisionedproduct";
import { _AWS_SERVICECATALOG_LAUNCHNOTIFICATIONCONSTRAINT } from "./cfn-resource-types/aws-servicecatalog-launchnotificationconstraint";
import { _AWS_SERVICECATALOG_LAUNCHROLECONSTRAINT } from "./cfn-resource-types/aws-servicecatalog-launchroleconstraint";
import { _AWS_SERVICECATALOG_LAUNCHTEMPLATECONSTRAINT } from "./cfn-resource-types/aws-servicecatalog-launchtemplateconstraint";
import { _AWS_SERVICECATALOG_PORTFOLIO } from "./cfn-resource-types/aws-servicecatalog-portfolio";
import { _AWS_SERVICECATALOG_PORTFOLIOPRINCIPALASSOCIATION } from "./cfn-resource-types/aws-servicecatalog-portfolioprincipalassociation";
import { _AWS_SERVICECATALOG_PORTFOLIOPRODUCTASSOCIATION } from "./cfn-resource-types/aws-servicecatalog-portfolioproductassociation";
import { _AWS_SERVICECATALOG_PORTFOLIOSHARE } from "./cfn-resource-types/aws-servicecatalog-portfolioshare";
import { _AWS_SERVICECATALOG_RESOURCEUPDATECONSTRAINT } from "./cfn-resource-types/aws-servicecatalog-resourceupdateconstraint";
import { _AWS_SERVICECATALOG_SERVICEACTION } from "./cfn-resource-types/aws-servicecatalog-serviceaction";
import { _AWS_SERVICECATALOG_SERVICEACTIONASSOCIATION } from "./cfn-resource-types/aws-servicecatalog-serviceactionassociation";
import { _AWS_SERVICECATALOG_STACKSETCONSTRAINT } from "./cfn-resource-types/aws-servicecatalog-stacksetconstraint";
import { _AWS_SERVICECATALOG_TAGOPTION } from "./cfn-resource-types/aws-servicecatalog-tagoption";
import { _AWS_SERVICECATALOG_TAGOPTIONASSOCIATION } from "./cfn-resource-types/aws-servicecatalog-tagoptionassociation";
import { _AWS_SERVICECATALOGAPPREGISTRY_APPLICATION } from "./cfn-resource-types/aws-servicecatalogappregistry-application";
import { _AWS_SERVICECATALOGAPPREGISTRY_ATTRIBUTEGROUP } from "./cfn-resource-types/aws-servicecatalogappregistry-attributegroup";
import { _AWS_SERVICECATALOGAPPREGISTRY_ATTRIBUTEGROUPASSOCIATION } from "./cfn-resource-types/aws-servicecatalogappregistry-attributegroupassociation";
import { _AWS_SERVICECATALOGAPPREGISTRY_RESOURCEASSOCIATION } from "./cfn-resource-types/aws-servicecatalogappregistry-resourceassociation";
import { _AWS_SERVICEDISCOVERY_HTTPNAMESPACE } from "./cfn-resource-types/aws-servicediscovery-httpnamespace";
import { _AWS_SERVICEDISCOVERY_INSTANCE } from "./cfn-resource-types/aws-servicediscovery-instance";
import { _AWS_SERVICEDISCOVERY_PRIVATEDNSNAMESPACE } from "./cfn-resource-types/aws-servicediscovery-privatednsnamespace";
import { _AWS_SERVICEDISCOVERY_PUBLICDNSNAMESPACE } from "./cfn-resource-types/aws-servicediscovery-publicdnsnamespace";
import { _AWS_SERVICEDISCOVERY_SERVICE } from "./cfn-resource-types/aws-servicediscovery-service";
import { _AWS_SES_CONFIGURATIONSET } from "./cfn-resource-types/aws-ses-configurationset";
import { _AWS_SES_CONFIGURATIONSETEVENTDESTINATION } from "./cfn-resource-types/aws-ses-configurationseteventdestination";
import { _AWS_SES_CONTACTLIST } from "./cfn-resource-types/aws-ses-contactlist";
import { _AWS_SES_DEDICATEDIPPOOL } from "./cfn-resource-types/aws-ses-dedicatedippool";
import { _AWS_SES_EMAILIDENTITY } from "./cfn-resource-types/aws-ses-emailidentity";
import { _AWS_SES_MAILMANAGERADDONINSTANCE } from "./cfn-resource-types/aws-ses-mailmanageraddoninstance";
import { _AWS_SES_MAILMANAGERADDONSUBSCRIPTION } from "./cfn-resource-types/aws-ses-mailmanageraddonsubscription";
import { _AWS_SES_MAILMANAGERARCHIVE } from "./cfn-resource-types/aws-ses-mailmanagerarchive";
import { _AWS_SES_MAILMANAGERINGRESSPOINT } from "./cfn-resource-types/aws-ses-mailmanageringresspoint";
import { _AWS_SES_MAILMANAGERRELAY } from "./cfn-resource-types/aws-ses-mailmanagerrelay";
import { _AWS_SES_MAILMANAGERRULESET } from "./cfn-resource-types/aws-ses-mailmanagerruleset";
import { _AWS_SES_MAILMANAGERTRAFFICPOLICY } from "./cfn-resource-types/aws-ses-mailmanagertrafficpolicy";
import { _AWS_SES_RECEIPTFILTER } from "./cfn-resource-types/aws-ses-receiptfilter";
import { _AWS_SES_RECEIPTRULE } from "./cfn-resource-types/aws-ses-receiptrule";
import { _AWS_SES_RECEIPTRULESET } from "./cfn-resource-types/aws-ses-receiptruleset";
import { _AWS_SES_TEMPLATE } from "./cfn-resource-types/aws-ses-template";
import { _AWS_SES_VDMATTRIBUTES } from "./cfn-resource-types/aws-ses-vdmattributes";
import { _AWS_SHIELD_DRTACCESS } from "./cfn-resource-types/aws-shield-drtaccess";
import { _AWS_SHIELD_PROACTIVEENGAGEMENT } from "./cfn-resource-types/aws-shield-proactiveengagement";
import { _AWS_SHIELD_PROTECTION } from "./cfn-resource-types/aws-shield-protection";
import { _AWS_SHIELD_PROTECTIONGROUP } from "./cfn-resource-types/aws-shield-protectiongroup";
import { _AWS_SIGNER_PROFILEPERMISSION } from "./cfn-resource-types/aws-signer-profilepermission";
import { _AWS_SIGNER_SIGNINGPROFILE } from "./cfn-resource-types/aws-signer-signingprofile";
import { _AWS_SIMSPACEWEAVER_SIMULATION } from "./cfn-resource-types/aws-simspaceweaver-simulation";
import { _AWS_SNS_SUBSCRIPTION } from "./cfn-resource-types/aws-sns-subscription";
import { _AWS_SNS_TOPIC } from "./cfn-resource-types/aws-sns-topic";
import { _AWS_SNS_TOPICINLINEPOLICY } from "./cfn-resource-types/aws-sns-topicinlinepolicy";
import { _AWS_SNS_TOPICPOLICY } from "./cfn-resource-types/aws-sns-topicpolicy";
import { _AWS_SQS_QUEUE } from "./cfn-resource-types/aws-sqs-queue";
import { _AWS_SQS_QUEUEINLINEPOLICY } from "./cfn-resource-types/aws-sqs-queueinlinepolicy";
import { _AWS_SQS_QUEUEPOLICY } from "./cfn-resource-types/aws-sqs-queuepolicy";
import { _AWS_SSM_ASSOCIATION } from "./cfn-resource-types/aws-ssm-association";
import { _AWS_SSM_DOCUMENT } from "./cfn-resource-types/aws-ssm-document";
import { _AWS_SSM_MAINTENANCEWINDOW } from "./cfn-resource-types/aws-ssm-maintenancewindow";
import { _AWS_SSM_MAINTENANCEWINDOWTARGET } from "./cfn-resource-types/aws-ssm-maintenancewindowtarget";
import { _AWS_SSM_MAINTENANCEWINDOWTASK } from "./cfn-resource-types/aws-ssm-maintenancewindowtask";
import { _AWS_SSM_PARAMETER } from "./cfn-resource-types/aws-ssm-parameter";
import { _AWS_SSM_PATCHBASELINE } from "./cfn-resource-types/aws-ssm-patchbaseline";
import { _AWS_SSM_RESOURCEDATASYNC } from "./cfn-resource-types/aws-ssm-resourcedatasync";
import { _AWS_SSM_RESOURCEPOLICY } from "./cfn-resource-types/aws-ssm-resourcepolicy";
import { _AWS_SSMCONTACTS_CONTACT } from "./cfn-resource-types/aws-ssmcontacts-contact";
import { _AWS_SSMCONTACTS_CONTACTCHANNEL } from "./cfn-resource-types/aws-ssmcontacts-contactchannel";
import { _AWS_SSMCONTACTS_PLAN } from "./cfn-resource-types/aws-ssmcontacts-plan";
import { _AWS_SSMCONTACTS_ROTATION } from "./cfn-resource-types/aws-ssmcontacts-rotation";
import { _AWS_SSMINCIDENTS_REPLICATIONSET } from "./cfn-resource-types/aws-ssmincidents-replicationset";
import { _AWS_SSMINCIDENTS_RESPONSEPLAN } from "./cfn-resource-types/aws-ssmincidents-responseplan";
import { _AWS_SSMQUICKSETUP_CONFIGURATIONMANAGER } from "./cfn-resource-types/aws-ssmquicksetup-configurationmanager";
import { _AWS_SSO_APPLICATION } from "./cfn-resource-types/aws-sso-application";
import { _AWS_SSO_APPLICATIONASSIGNMENT } from "./cfn-resource-types/aws-sso-applicationassignment";
import { _AWS_SSO_ASSIGNMENT } from "./cfn-resource-types/aws-sso-assignment";
import { _AWS_SSO_INSTANCE } from "./cfn-resource-types/aws-sso-instance";
import { _AWS_SSO_INSTANCEACCESSCONTROLATTRIBUTECONFIGURATION } from "./cfn-resource-types/aws-sso-instanceaccesscontrolattributeconfiguration";
import { _AWS_SSO_PERMISSIONSET } from "./cfn-resource-types/aws-sso-permissionset";
import { _AWS_STEPFUNCTIONS_ACTIVITY } from "./cfn-resource-types/aws-stepfunctions-activity";
import { _AWS_STEPFUNCTIONS_STATEMACHINE } from "./cfn-resource-types/aws-stepfunctions-statemachine";
import { _AWS_STEPFUNCTIONS_STATEMACHINEALIAS } from "./cfn-resource-types/aws-stepfunctions-statemachinealias";
import { _AWS_STEPFUNCTIONS_STATEMACHINEVERSION } from "./cfn-resource-types/aws-stepfunctions-statemachineversion";
import { _AWS_SUPPORTAPP_ACCOUNTALIAS } from "./cfn-resource-types/aws-supportapp-accountalias";
import { _AWS_SUPPORTAPP_SLACKCHANNELCONFIGURATION } from "./cfn-resource-types/aws-supportapp-slackchannelconfiguration";
import { _AWS_SUPPORTAPP_SLACKWORKSPACECONFIGURATION } from "./cfn-resource-types/aws-supportapp-slackworkspaceconfiguration";
import { _AWS_SYNTHETICS_CANARY } from "./cfn-resource-types/aws-synthetics-canary";
import { _AWS_SYNTHETICS_GROUP } from "./cfn-resource-types/aws-synthetics-group";
import { _AWS_SYSTEMSMANAGERSAP_APPLICATION } from "./cfn-resource-types/aws-systemsmanagersap-application";
import { _AWS_TIMESTREAM_DATABASE } from "./cfn-resource-types/aws-timestream-database";
import { _AWS_TIMESTREAM_INFLUXDBINSTANCE } from "./cfn-resource-types/aws-timestream-influxdbinstance";
import { _AWS_TIMESTREAM_SCHEDULEDQUERY } from "./cfn-resource-types/aws-timestream-scheduledquery";
import { _AWS_TIMESTREAM_TABLE } from "./cfn-resource-types/aws-timestream-table";
import { _AWS_TRANSFER_AGREEMENT } from "./cfn-resource-types/aws-transfer-agreement";
import { _AWS_TRANSFER_CERTIFICATE } from "./cfn-resource-types/aws-transfer-certificate";
import { _AWS_TRANSFER_CONNECTOR } from "./cfn-resource-types/aws-transfer-connector";
import { _AWS_TRANSFER_PROFILE } from "./cfn-resource-types/aws-transfer-profile";
import { _AWS_TRANSFER_SERVER } from "./cfn-resource-types/aws-transfer-server";
import { _AWS_TRANSFER_USER } from "./cfn-resource-types/aws-transfer-user";
import { _AWS_TRANSFER_WORKFLOW } from "./cfn-resource-types/aws-transfer-workflow";
import { _AWS_VERIFIEDPERMISSIONS_IDENTITYSOURCE } from "./cfn-resource-types/aws-verifiedpermissions-identitysource";
import { _AWS_VERIFIEDPERMISSIONS_POLICY } from "./cfn-resource-types/aws-verifiedpermissions-policy";
import { _AWS_VERIFIEDPERMISSIONS_POLICYSTORE } from "./cfn-resource-types/aws-verifiedpermissions-policystore";
import { _AWS_VERIFIEDPERMISSIONS_POLICYTEMPLATE } from "./cfn-resource-types/aws-verifiedpermissions-policytemplate";
import { _AWS_VOICEID_DOMAIN } from "./cfn-resource-types/aws-voiceid-domain";
import { _AWS_VPCLATTICE_ACCESSLOGSUBSCRIPTION } from "./cfn-resource-types/aws-vpclattice-accesslogsubscription";
import { _AWS_VPCLATTICE_AUTHPOLICY } from "./cfn-resource-types/aws-vpclattice-authpolicy";
import { _AWS_VPCLATTICE_LISTENER } from "./cfn-resource-types/aws-vpclattice-listener";
import { _AWS_VPCLATTICE_RESOURCEPOLICY } from "./cfn-resource-types/aws-vpclattice-resourcepolicy";
import { _AWS_VPCLATTICE_RULE } from "./cfn-resource-types/aws-vpclattice-rule";
import { _AWS_VPCLATTICE_SERVICE } from "./cfn-resource-types/aws-vpclattice-service";
import { _AWS_VPCLATTICE_SERVICENETWORK } from "./cfn-resource-types/aws-vpclattice-servicenetwork";
import { _AWS_VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION } from "./cfn-resource-types/aws-vpclattice-servicenetworkserviceassociation";
import { _AWS_VPCLATTICE_SERVICENETWORKVPCASSOCIATION } from "./cfn-resource-types/aws-vpclattice-servicenetworkvpcassociation";
import { _AWS_VPCLATTICE_TARGETGROUP } from "./cfn-resource-types/aws-vpclattice-targetgroup";
import { _AWS_WAF_BYTEMATCHSET } from "./cfn-resource-types/aws-waf-bytematchset";
import { _AWS_WAF_IPSET } from "./cfn-resource-types/aws-waf-ipset";
import { _AWS_WAF_RULE } from "./cfn-resource-types/aws-waf-rule";
import { _AWS_WAF_SIZECONSTRAINTSET } from "./cfn-resource-types/aws-waf-sizeconstraintset";
import { _AWS_WAF_SQLINJECTIONMATCHSET } from "./cfn-resource-types/aws-waf-sqlinjectionmatchset";
import { _AWS_WAF_WEBACL } from "./cfn-resource-types/aws-waf-webacl";
import { _AWS_WAF_XSSMATCHSET } from "./cfn-resource-types/aws-waf-xssmatchset";
import { _AWS_WAFREGIONAL_BYTEMATCHSET } from "./cfn-resource-types/aws-wafregional-bytematchset";
import { _AWS_WAFREGIONAL_GEOMATCHSET } from "./cfn-resource-types/aws-wafregional-geomatchset";
import { _AWS_WAFREGIONAL_IPSET } from "./cfn-resource-types/aws-wafregional-ipset";
import { _AWS_WAFREGIONAL_RATEBASEDRULE } from "./cfn-resource-types/aws-wafregional-ratebasedrule";
import { _AWS_WAFREGIONAL_REGEXPATTERNSET } from "./cfn-resource-types/aws-wafregional-regexpatternset";
import { _AWS_WAFREGIONAL_RULE } from "./cfn-resource-types/aws-wafregional-rule";
import { _AWS_WAFREGIONAL_SIZECONSTRAINTSET } from "./cfn-resource-types/aws-wafregional-sizeconstraintset";
import { _AWS_WAFREGIONAL_SQLINJECTIONMATCHSET } from "./cfn-resource-types/aws-wafregional-sqlinjectionmatchset";
import { _AWS_WAFREGIONAL_WEBACL } from "./cfn-resource-types/aws-wafregional-webacl";
import { _AWS_WAFREGIONAL_WEBACLASSOCIATION } from "./cfn-resource-types/aws-wafregional-webaclassociation";
import { _AWS_WAFREGIONAL_XSSMATCHSET } from "./cfn-resource-types/aws-wafregional-xssmatchset";
import { _AWS_WAFV2_IPSET } from "./cfn-resource-types/aws-wafv2-ipset";
import { _AWS_WAFV2_LOGGINGCONFIGURATION } from "./cfn-resource-types/aws-wafv2-loggingconfiguration";
import { _AWS_WAFV2_REGEXPATTERNSET } from "./cfn-resource-types/aws-wafv2-regexpatternset";
import { _AWS_WAFV2_RULEGROUP } from "./cfn-resource-types/aws-wafv2-rulegroup";
import { _AWS_WAFV2_WEBACL } from "./cfn-resource-types/aws-wafv2-webacl";
import { _AWS_WAFV2_WEBACLASSOCIATION } from "./cfn-resource-types/aws-wafv2-webaclassociation";
import { _AWS_WISDOM_ASSISTANT } from "./cfn-resource-types/aws-wisdom-assistant";
import { _AWS_WISDOM_ASSISTANTASSOCIATION } from "./cfn-resource-types/aws-wisdom-assistantassociation";
import { _AWS_WISDOM_KNOWLEDGEBASE } from "./cfn-resource-types/aws-wisdom-knowledgebase";
import { _AWS_WORKSPACES_CONNECTIONALIAS } from "./cfn-resource-types/aws-workspaces-connectionalias";
import { _AWS_WORKSPACES_WORKSPACE } from "./cfn-resource-types/aws-workspaces-workspace";
import { _AWS_WORKSPACES_WORKSPACESPOOL } from "./cfn-resource-types/aws-workspaces-workspacespool";
import { _AWS_WORKSPACESTHINCLIENT_ENVIRONMENT } from "./cfn-resource-types/aws-workspacesthinclient-environment";
import { _AWS_WORKSPACESWEB_BROWSERSETTINGS } from "./cfn-resource-types/aws-workspacesweb-browsersettings";
import { _AWS_WORKSPACESWEB_IDENTITYPROVIDER } from "./cfn-resource-types/aws-workspacesweb-identityprovider";
import { _AWS_WORKSPACESWEB_IPACCESSSETTINGS } from "./cfn-resource-types/aws-workspacesweb-ipaccesssettings";
import { _AWS_WORKSPACESWEB_NETWORKSETTINGS } from "./cfn-resource-types/aws-workspacesweb-networksettings";
import { _AWS_WORKSPACESWEB_PORTAL } from "./cfn-resource-types/aws-workspacesweb-portal";
import { _AWS_WORKSPACESWEB_TRUSTSTORE } from "./cfn-resource-types/aws-workspacesweb-truststore";
import { _AWS_WORKSPACESWEB_USERACCESSLOGGINGSETTINGS } from "./cfn-resource-types/aws-workspacesweb-useraccessloggingsettings";
import { _AWS_WORKSPACESWEB_USERSETTINGS } from "./cfn-resource-types/aws-workspacesweb-usersettings";
import { _AWS_XRAY_GROUP } from "./cfn-resource-types/aws-xray-group";
import { _AWS_XRAY_RESOURCEPOLICY } from "./cfn-resource-types/aws-xray-resourcepolicy";
import { _AWS_XRAY_SAMPLINGRULE } from "./cfn-resource-types/aws-xray-samplingrule";
export const ALEXA_ASK_SKILL:RESOURCE<_ALEXA_ASK_SKILL> = (resource) => {return {Type: "Alexa::ASK::Skill", ...resource}}
export const AWS_ACCESSANALYZER_ANALYZER:RESOURCE<_AWS_ACCESSANALYZER_ANALYZER> = (resource) => {return {Type: "AWS::AccessAnalyzer::Analyzer", ...resource}}
export const AWS_ACMPCA_CERTIFICATE:RESOURCE<_AWS_ACMPCA_CERTIFICATE> = (resource) => {return {Type: "AWS::ACMPCA::Certificate", ...resource}}
export const AWS_ACMPCA_CERTIFICATEAUTHORITY:RESOURCE<_AWS_ACMPCA_CERTIFICATEAUTHORITY> = (resource) => {return {Type: "AWS::ACMPCA::CertificateAuthority", ...resource}}
export const AWS_ACMPCA_CERTIFICATEAUTHORITYACTIVATION:RESOURCE<_AWS_ACMPCA_CERTIFICATEAUTHORITYACTIVATION> = (resource) => {return {Type: "AWS::ACMPCA::CertificateAuthorityActivation", ...resource}}
export const AWS_ACMPCA_PERMISSION:RESOURCE<_AWS_ACMPCA_PERMISSION> = (resource) => {return {Type: "AWS::ACMPCA::Permission", ...resource}}
export const AWS_AMAZONMQ_BROKER:RESOURCE<_AWS_AMAZONMQ_BROKER> = (resource) => {return {Type: "AWS::AmazonMQ::Broker", ...resource}}
export const AWS_AMAZONMQ_CONFIGURATION:RESOURCE<_AWS_AMAZONMQ_CONFIGURATION> = (resource) => {return {Type: "AWS::AmazonMQ::Configuration", ...resource}}
export const AWS_AMAZONMQ_CONFIGURATIONASSOCIATION:RESOURCE<_AWS_AMAZONMQ_CONFIGURATIONASSOCIATION> = (resource) => {return {Type: "AWS::AmazonMQ::ConfigurationAssociation", ...resource}}
export const AWS_AMPLIFY_APP:RESOURCE<_AWS_AMPLIFY_APP> = (resource) => {return {Type: "AWS::Amplify::App", ...resource}}
export const AWS_AMPLIFY_BRANCH:RESOURCE<_AWS_AMPLIFY_BRANCH> = (resource) => {return {Type: "AWS::Amplify::Branch", ...resource}}
export const AWS_AMPLIFY_DOMAIN:RESOURCE<_AWS_AMPLIFY_DOMAIN> = (resource) => {return {Type: "AWS::Amplify::Domain", ...resource}}
export const AWS_AMPLIFYUIBUILDER_COMPONENT:RESOURCE<_AWS_AMPLIFYUIBUILDER_COMPONENT> = (resource) => {return {Type: "AWS::AmplifyUIBuilder::Component", ...resource}}
export const AWS_AMPLIFYUIBUILDER_FORM:RESOURCE<_AWS_AMPLIFYUIBUILDER_FORM> = (resource) => {return {Type: "AWS::AmplifyUIBuilder::Form", ...resource}}
export const AWS_AMPLIFYUIBUILDER_THEME:RESOURCE<_AWS_AMPLIFYUIBUILDER_THEME> = (resource) => {return {Type: "AWS::AmplifyUIBuilder::Theme", ...resource}}
export const AWS_APIGATEWAY_ACCOUNT:RESOURCE<_AWS_APIGATEWAY_ACCOUNT> = (resource) => {return {Type: "AWS::ApiGateway::Account", ...resource}}
export const AWS_APIGATEWAY_APIKEY:RESOURCE<_AWS_APIGATEWAY_APIKEY> = (resource) => {return {Type: "AWS::ApiGateway::ApiKey", ...resource}}
export const AWS_APIGATEWAY_AUTHORIZER:RESOURCE<_AWS_APIGATEWAY_AUTHORIZER> = (resource) => {return {Type: "AWS::ApiGateway::Authorizer", ...resource}}
export const AWS_APIGATEWAY_BASEPATHMAPPING:RESOURCE<_AWS_APIGATEWAY_BASEPATHMAPPING> = (resource) => {return {Type: "AWS::ApiGateway::BasePathMapping", ...resource}}
export const AWS_APIGATEWAY_CLIENTCERTIFICATE:RESOURCE<_AWS_APIGATEWAY_CLIENTCERTIFICATE> = (resource) => {return {Type: "AWS::ApiGateway::ClientCertificate", ...resource}}
export const AWS_APIGATEWAY_DEPLOYMENT:RESOURCE<_AWS_APIGATEWAY_DEPLOYMENT> = (resource) => {return {Type: "AWS::ApiGateway::Deployment", ...resource}}
export const AWS_APIGATEWAY_DOCUMENTATIONPART:RESOURCE<_AWS_APIGATEWAY_DOCUMENTATIONPART> = (resource) => {return {Type: "AWS::ApiGateway::DocumentationPart", ...resource}}
export const AWS_APIGATEWAY_DOCUMENTATIONVERSION:RESOURCE<_AWS_APIGATEWAY_DOCUMENTATIONVERSION> = (resource) => {return {Type: "AWS::ApiGateway::DocumentationVersion", ...resource}}
export const AWS_APIGATEWAY_DOMAINNAME:RESOURCE<_AWS_APIGATEWAY_DOMAINNAME> = (resource) => {return {Type: "AWS::ApiGateway::DomainName", ...resource}}
export const AWS_APIGATEWAY_GATEWAYRESPONSE:RESOURCE<_AWS_APIGATEWAY_GATEWAYRESPONSE> = (resource) => {return {Type: "AWS::ApiGateway::GatewayResponse", ...resource}}
export const AWS_APIGATEWAY_METHOD:RESOURCE<_AWS_APIGATEWAY_METHOD> = (resource) => {return {Type: "AWS::ApiGateway::Method", ...resource}}
export const AWS_APIGATEWAY_MODEL:RESOURCE<_AWS_APIGATEWAY_MODEL> = (resource) => {return {Type: "AWS::ApiGateway::Model", ...resource}}
export const AWS_APIGATEWAY_REQUESTVALIDATOR:RESOURCE<_AWS_APIGATEWAY_REQUESTVALIDATOR> = (resource) => {return {Type: "AWS::ApiGateway::RequestValidator", ...resource}}
export const AWS_APIGATEWAY_RESOURCE:RESOURCE<_AWS_APIGATEWAY_RESOURCE> = (resource) => {return {Type: "AWS::ApiGateway::Resource", ...resource}}
export const AWS_APIGATEWAY_RESTAPI:RESOURCE<_AWS_APIGATEWAY_RESTAPI> = (resource) => {return {Type: "AWS::ApiGateway::RestApi", ...resource}}
export const AWS_APIGATEWAY_STAGE:RESOURCE<_AWS_APIGATEWAY_STAGE> = (resource) => {return {Type: "AWS::ApiGateway::Stage", ...resource}}
export const AWS_APIGATEWAY_USAGEPLAN:RESOURCE<_AWS_APIGATEWAY_USAGEPLAN> = (resource) => {return {Type: "AWS::ApiGateway::UsagePlan", ...resource}}
export const AWS_APIGATEWAY_USAGEPLANKEY:RESOURCE<_AWS_APIGATEWAY_USAGEPLANKEY> = (resource) => {return {Type: "AWS::ApiGateway::UsagePlanKey", ...resource}}
export const AWS_APIGATEWAY_VPCLINK:RESOURCE<_AWS_APIGATEWAY_VPCLINK> = (resource) => {return {Type: "AWS::ApiGateway::VpcLink", ...resource}}
export const AWS_APIGATEWAYV2_API:RESOURCE<_AWS_APIGATEWAYV2_API> = (resource) => {return {Type: "AWS::ApiGatewayV2::Api", ...resource}}
export const AWS_APIGATEWAYV2_APIGATEWAYMANAGEDOVERRIDES:RESOURCE<_AWS_APIGATEWAYV2_APIGATEWAYMANAGEDOVERRIDES> = (resource) => {return {Type: "AWS::ApiGatewayV2::ApiGatewayManagedOverrides", ...resource}}
export const AWS_APIGATEWAYV2_APIMAPPING:RESOURCE<_AWS_APIGATEWAYV2_APIMAPPING> = (resource) => {return {Type: "AWS::ApiGatewayV2::ApiMapping", ...resource}}
export const AWS_APIGATEWAYV2_AUTHORIZER:RESOURCE<_AWS_APIGATEWAYV2_AUTHORIZER> = (resource) => {return {Type: "AWS::ApiGatewayV2::Authorizer", ...resource}}
export const AWS_APIGATEWAYV2_DEPLOYMENT:RESOURCE<_AWS_APIGATEWAYV2_DEPLOYMENT> = (resource) => {return {Type: "AWS::ApiGatewayV2::Deployment", ...resource}}
export const AWS_APIGATEWAYV2_DOMAINNAME:RESOURCE<_AWS_APIGATEWAYV2_DOMAINNAME> = (resource) => {return {Type: "AWS::ApiGatewayV2::DomainName", ...resource}}
export const AWS_APIGATEWAYV2_INTEGRATION:RESOURCE<_AWS_APIGATEWAYV2_INTEGRATION> = (resource) => {return {Type: "AWS::ApiGatewayV2::Integration", ...resource}}
export const AWS_APIGATEWAYV2_INTEGRATIONRESPONSE:RESOURCE<_AWS_APIGATEWAYV2_INTEGRATIONRESPONSE> = (resource) => {return {Type: "AWS::ApiGatewayV2::IntegrationResponse", ...resource}}
export const AWS_APIGATEWAYV2_MODEL:RESOURCE<_AWS_APIGATEWAYV2_MODEL> = (resource) => {return {Type: "AWS::ApiGatewayV2::Model", ...resource}}
export const AWS_APIGATEWAYV2_ROUTE:RESOURCE<_AWS_APIGATEWAYV2_ROUTE> = (resource) => {return {Type: "AWS::ApiGatewayV2::Route", ...resource}}
export const AWS_APIGATEWAYV2_ROUTERESPONSE:RESOURCE<_AWS_APIGATEWAYV2_ROUTERESPONSE> = (resource) => {return {Type: "AWS::ApiGatewayV2::RouteResponse", ...resource}}
export const AWS_APIGATEWAYV2_STAGE:RESOURCE<_AWS_APIGATEWAYV2_STAGE> = (resource) => {return {Type: "AWS::ApiGatewayV2::Stage", ...resource}}
export const AWS_APIGATEWAYV2_VPCLINK:RESOURCE<_AWS_APIGATEWAYV2_VPCLINK> = (resource) => {return {Type: "AWS::ApiGatewayV2::VpcLink", ...resource}}
export const AWS_APPCONFIG_APPLICATION:RESOURCE<_AWS_APPCONFIG_APPLICATION> = (resource) => {return {Type: "AWS::AppConfig::Application", ...resource}}
export const AWS_APPCONFIG_CONFIGURATIONPROFILE:RESOURCE<_AWS_APPCONFIG_CONFIGURATIONPROFILE> = (resource) => {return {Type: "AWS::AppConfig::ConfigurationProfile", ...resource}}
export const AWS_APPCONFIG_DEPLOYMENT:RESOURCE<_AWS_APPCONFIG_DEPLOYMENT> = (resource) => {return {Type: "AWS::AppConfig::Deployment", ...resource}}
export const AWS_APPCONFIG_DEPLOYMENTSTRATEGY:RESOURCE<_AWS_APPCONFIG_DEPLOYMENTSTRATEGY> = (resource) => {return {Type: "AWS::AppConfig::DeploymentStrategy", ...resource}}
export const AWS_APPCONFIG_ENVIRONMENT:RESOURCE<_AWS_APPCONFIG_ENVIRONMENT> = (resource) => {return {Type: "AWS::AppConfig::Environment", ...resource}}
export const AWS_APPCONFIG_EXTENSION:RESOURCE<_AWS_APPCONFIG_EXTENSION> = (resource) => {return {Type: "AWS::AppConfig::Extension", ...resource}}
export const AWS_APPCONFIG_EXTENSIONASSOCIATION:RESOURCE<_AWS_APPCONFIG_EXTENSIONASSOCIATION> = (resource) => {return {Type: "AWS::AppConfig::ExtensionAssociation", ...resource}}
export const AWS_APPCONFIG_HOSTEDCONFIGURATIONVERSION:RESOURCE<_AWS_APPCONFIG_HOSTEDCONFIGURATIONVERSION> = (resource) => {return {Type: "AWS::AppConfig::HostedConfigurationVersion", ...resource}}
export const AWS_APPFLOW_CONNECTOR:RESOURCE<_AWS_APPFLOW_CONNECTOR> = (resource) => {return {Type: "AWS::AppFlow::Connector", ...resource}}
export const AWS_APPFLOW_CONNECTORPROFILE:RESOURCE<_AWS_APPFLOW_CONNECTORPROFILE> = (resource) => {return {Type: "AWS::AppFlow::ConnectorProfile", ...resource}}
export const AWS_APPFLOW_FLOW:RESOURCE<_AWS_APPFLOW_FLOW> = (resource) => {return {Type: "AWS::AppFlow::Flow", ...resource}}
export const AWS_APPINTEGRATIONS_APPLICATION:RESOURCE<_AWS_APPINTEGRATIONS_APPLICATION> = (resource) => {return {Type: "AWS::AppIntegrations::Application", ...resource}}
export const AWS_APPINTEGRATIONS_DATAINTEGRATION:RESOURCE<_AWS_APPINTEGRATIONS_DATAINTEGRATION> = (resource) => {return {Type: "AWS::AppIntegrations::DataIntegration", ...resource}}
export const AWS_APPINTEGRATIONS_EVENTINTEGRATION:RESOURCE<_AWS_APPINTEGRATIONS_EVENTINTEGRATION> = (resource) => {return {Type: "AWS::AppIntegrations::EventIntegration", ...resource}}
export const AWS_APPLICATIONAUTOSCALING_SCALABLETARGET:RESOURCE<_AWS_APPLICATIONAUTOSCALING_SCALABLETARGET> = (resource) => {return {Type: "AWS::ApplicationAutoScaling::ScalableTarget", ...resource}}
export const AWS_APPLICATIONAUTOSCALING_SCALINGPOLICY:RESOURCE<_AWS_APPLICATIONAUTOSCALING_SCALINGPOLICY> = (resource) => {return {Type: "AWS::ApplicationAutoScaling::ScalingPolicy", ...resource}}
export const AWS_APPLICATIONINSIGHTS_APPLICATION:RESOURCE<_AWS_APPLICATIONINSIGHTS_APPLICATION> = (resource) => {return {Type: "AWS::ApplicationInsights::Application", ...resource}}
export const AWS_APPLICATIONSIGNALS_SERVICELEVELOBJECTIVE:RESOURCE<_AWS_APPLICATIONSIGNALS_SERVICELEVELOBJECTIVE> = (resource) => {return {Type: "AWS::ApplicationSignals::ServiceLevelObjective", ...resource}}
export const AWS_APPMESH_GATEWAYROUTE:RESOURCE<_AWS_APPMESH_GATEWAYROUTE> = (resource) => {return {Type: "AWS::AppMesh::GatewayRoute", ...resource}}
export const AWS_APPMESH_MESH:RESOURCE<_AWS_APPMESH_MESH> = (resource) => {return {Type: "AWS::AppMesh::Mesh", ...resource}}
export const AWS_APPMESH_ROUTE:RESOURCE<_AWS_APPMESH_ROUTE> = (resource) => {return {Type: "AWS::AppMesh::Route", ...resource}}
export const AWS_APPMESH_VIRTUALGATEWAY:RESOURCE<_AWS_APPMESH_VIRTUALGATEWAY> = (resource) => {return {Type: "AWS::AppMesh::VirtualGateway", ...resource}}
export const AWS_APPMESH_VIRTUALNODE:RESOURCE<_AWS_APPMESH_VIRTUALNODE> = (resource) => {return {Type: "AWS::AppMesh::VirtualNode", ...resource}}
export const AWS_APPMESH_VIRTUALROUTER:RESOURCE<_AWS_APPMESH_VIRTUALROUTER> = (resource) => {return {Type: "AWS::AppMesh::VirtualRouter", ...resource}}
export const AWS_APPMESH_VIRTUALSERVICE:RESOURCE<_AWS_APPMESH_VIRTUALSERVICE> = (resource) => {return {Type: "AWS::AppMesh::VirtualService", ...resource}}
export const AWS_APPRUNNER_AUTOSCALINGCONFIGURATION:RESOURCE<_AWS_APPRUNNER_AUTOSCALINGCONFIGURATION> = (resource) => {return {Type: "AWS::AppRunner::AutoScalingConfiguration", ...resource}}
export const AWS_APPRUNNER_OBSERVABILITYCONFIGURATION:RESOURCE<_AWS_APPRUNNER_OBSERVABILITYCONFIGURATION> = (resource) => {return {Type: "AWS::AppRunner::ObservabilityConfiguration", ...resource}}
export const AWS_APPRUNNER_SERVICE:RESOURCE<_AWS_APPRUNNER_SERVICE> = (resource) => {return {Type: "AWS::AppRunner::Service", ...resource}}
export const AWS_APPRUNNER_VPCCONNECTOR:RESOURCE<_AWS_APPRUNNER_VPCCONNECTOR> = (resource) => {return {Type: "AWS::AppRunner::VpcConnector", ...resource}}
export const AWS_APPRUNNER_VPCINGRESSCONNECTION:RESOURCE<_AWS_APPRUNNER_VPCINGRESSCONNECTION> = (resource) => {return {Type: "AWS::AppRunner::VpcIngressConnection", ...resource}}
export const AWS_APPSTREAM_APPBLOCK:RESOURCE<_AWS_APPSTREAM_APPBLOCK> = (resource) => {return {Type: "AWS::AppStream::AppBlock", ...resource}}
export const AWS_APPSTREAM_APPBLOCKBUILDER:RESOURCE<_AWS_APPSTREAM_APPBLOCKBUILDER> = (resource) => {return {Type: "AWS::AppStream::AppBlockBuilder", ...resource}}
export const AWS_APPSTREAM_APPLICATION:RESOURCE<_AWS_APPSTREAM_APPLICATION> = (resource) => {return {Type: "AWS::AppStream::Application", ...resource}}
export const AWS_APPSTREAM_APPLICATIONENTITLEMENTASSOCIATION:RESOURCE<_AWS_APPSTREAM_APPLICATIONENTITLEMENTASSOCIATION> = (resource) => {return {Type: "AWS::AppStream::ApplicationEntitlementAssociation", ...resource}}
export const AWS_APPSTREAM_APPLICATIONFLEETASSOCIATION:RESOURCE<_AWS_APPSTREAM_APPLICATIONFLEETASSOCIATION> = (resource) => {return {Type: "AWS::AppStream::ApplicationFleetAssociation", ...resource}}
export const AWS_APPSTREAM_DIRECTORYCONFIG:RESOURCE<_AWS_APPSTREAM_DIRECTORYCONFIG> = (resource) => {return {Type: "AWS::AppStream::DirectoryConfig", ...resource}}
export const AWS_APPSTREAM_ENTITLEMENT:RESOURCE<_AWS_APPSTREAM_ENTITLEMENT> = (resource) => {return {Type: "AWS::AppStream::Entitlement", ...resource}}
export const AWS_APPSTREAM_FLEET:RESOURCE<_AWS_APPSTREAM_FLEET> = (resource) => {return {Type: "AWS::AppStream::Fleet", ...resource}}
export const AWS_APPSTREAM_IMAGEBUILDER:RESOURCE<_AWS_APPSTREAM_IMAGEBUILDER> = (resource) => {return {Type: "AWS::AppStream::ImageBuilder", ...resource}}
export const AWS_APPSTREAM_STACK:RESOURCE<_AWS_APPSTREAM_STACK> = (resource) => {return {Type: "AWS::AppStream::Stack", ...resource}}
export const AWS_APPSTREAM_STACKFLEETASSOCIATION:RESOURCE<_AWS_APPSTREAM_STACKFLEETASSOCIATION> = (resource) => {return {Type: "AWS::AppStream::StackFleetAssociation", ...resource}}
export const AWS_APPSTREAM_STACKUSERASSOCIATION:RESOURCE<_AWS_APPSTREAM_STACKUSERASSOCIATION> = (resource) => {return {Type: "AWS::AppStream::StackUserAssociation", ...resource}}
export const AWS_APPSTREAM_USER:RESOURCE<_AWS_APPSTREAM_USER> = (resource) => {return {Type: "AWS::AppStream::User", ...resource}}
export const AWS_APPSYNC_APICACHE:RESOURCE<_AWS_APPSYNC_APICACHE> = (resource) => {return {Type: "AWS::AppSync::ApiCache", ...resource}}
export const AWS_APPSYNC_APIKEY:RESOURCE<_AWS_APPSYNC_APIKEY> = (resource) => {return {Type: "AWS::AppSync::ApiKey", ...resource}}
export const AWS_APPSYNC_DATASOURCE:RESOURCE<_AWS_APPSYNC_DATASOURCE> = (resource) => {return {Type: "AWS::AppSync::DataSource", ...resource}}
export const AWS_APPSYNC_DOMAINNAME:RESOURCE<_AWS_APPSYNC_DOMAINNAME> = (resource) => {return {Type: "AWS::AppSync::DomainName", ...resource}}
export const AWS_APPSYNC_DOMAINNAMEAPIASSOCIATION:RESOURCE<_AWS_APPSYNC_DOMAINNAMEAPIASSOCIATION> = (resource) => {return {Type: "AWS::AppSync::DomainNameApiAssociation", ...resource}}
export const AWS_APPSYNC_FUNCTIONCONFIGURATION:RESOURCE<_AWS_APPSYNC_FUNCTIONCONFIGURATION> = (resource) => {return {Type: "AWS::AppSync::FunctionConfiguration", ...resource}}
export const AWS_APPSYNC_GRAPHQLAPI:RESOURCE<_AWS_APPSYNC_GRAPHQLAPI> = (resource) => {return {Type: "AWS::AppSync::GraphQLApi", ...resource}}
export const AWS_APPSYNC_GRAPHQLSCHEMA:RESOURCE<_AWS_APPSYNC_GRAPHQLSCHEMA> = (resource) => {return {Type: "AWS::AppSync::GraphQLSchema", ...resource}}
export const AWS_APPSYNC_RESOLVER:RESOURCE<_AWS_APPSYNC_RESOLVER> = (resource) => {return {Type: "AWS::AppSync::Resolver", ...resource}}
export const AWS_APPSYNC_SOURCEAPIASSOCIATION:RESOURCE<_AWS_APPSYNC_SOURCEAPIASSOCIATION> = (resource) => {return {Type: "AWS::AppSync::SourceApiAssociation", ...resource}}
export const AWS_APPTEST_TESTCASE:RESOURCE<_AWS_APPTEST_TESTCASE> = (resource) => {return {Type: "AWS::AppTest::TestCase", ...resource}}
export const AWS_APS_RULEGROUPSNAMESPACE:RESOURCE<_AWS_APS_RULEGROUPSNAMESPACE> = (resource) => {return {Type: "AWS::APS::RuleGroupsNamespace", ...resource}}
export const AWS_APS_SCRAPER:RESOURCE<_AWS_APS_SCRAPER> = (resource) => {return {Type: "AWS::APS::Scraper", ...resource}}
export const AWS_APS_WORKSPACE:RESOURCE<_AWS_APS_WORKSPACE> = (resource) => {return {Type: "AWS::APS::Workspace", ...resource}}
export const AWS_ARCZONALSHIFT_AUTOSHIFTOBSERVERNOTIFICATIONSTATUS:RESOURCE<_AWS_ARCZONALSHIFT_AUTOSHIFTOBSERVERNOTIFICATIONSTATUS> = (resource) => {return {Type: "AWS::ARCZonalShift::AutoshiftObserverNotificationStatus", ...resource}}
export const AWS_ARCZONALSHIFT_ZONALAUTOSHIFTCONFIGURATION:RESOURCE<_AWS_ARCZONALSHIFT_ZONALAUTOSHIFTCONFIGURATION> = (resource) => {return {Type: "AWS::ARCZonalShift::ZonalAutoshiftConfiguration", ...resource}}
export const AWS_ATHENA_CAPACITYRESERVATION:RESOURCE<_AWS_ATHENA_CAPACITYRESERVATION> = (resource) => {return {Type: "AWS::Athena::CapacityReservation", ...resource}}
export const AWS_ATHENA_DATACATALOG:RESOURCE<_AWS_ATHENA_DATACATALOG> = (resource) => {return {Type: "AWS::Athena::DataCatalog", ...resource}}
export const AWS_ATHENA_NAMEDQUERY:RESOURCE<_AWS_ATHENA_NAMEDQUERY> = (resource) => {return {Type: "AWS::Athena::NamedQuery", ...resource}}
export const AWS_ATHENA_PREPAREDSTATEMENT:RESOURCE<_AWS_ATHENA_PREPAREDSTATEMENT> = (resource) => {return {Type: "AWS::Athena::PreparedStatement", ...resource}}
export const AWS_ATHENA_WORKGROUP:RESOURCE<_AWS_ATHENA_WORKGROUP> = (resource) => {return {Type: "AWS::Athena::WorkGroup", ...resource}}
export const AWS_AUDITMANAGER_ASSESSMENT:RESOURCE<_AWS_AUDITMANAGER_ASSESSMENT> = (resource) => {return {Type: "AWS::AuditManager::Assessment", ...resource}}
export const AWS_AUTOSCALING_AUTOSCALINGGROUP:RESOURCE<_AWS_AUTOSCALING_AUTOSCALINGGROUP> = (resource) => {return {Type: "AWS::AutoScaling::AutoScalingGroup", ...resource}}
export const AWS_AUTOSCALING_LAUNCHCONFIGURATION:RESOURCE<_AWS_AUTOSCALING_LAUNCHCONFIGURATION> = (resource) => {return {Type: "AWS::AutoScaling::LaunchConfiguration", ...resource}}
export const AWS_AUTOSCALING_LIFECYCLEHOOK:RESOURCE<_AWS_AUTOSCALING_LIFECYCLEHOOK> = (resource) => {return {Type: "AWS::AutoScaling::LifecycleHook", ...resource}}
export const AWS_AUTOSCALING_SCALINGPOLICY:RESOURCE<_AWS_AUTOSCALING_SCALINGPOLICY> = (resource) => {return {Type: "AWS::AutoScaling::ScalingPolicy", ...resource}}
export const AWS_AUTOSCALING_SCHEDULEDACTION:RESOURCE<_AWS_AUTOSCALING_SCHEDULEDACTION> = (resource) => {return {Type: "AWS::AutoScaling::ScheduledAction", ...resource}}
export const AWS_AUTOSCALING_WARMPOOL:RESOURCE<_AWS_AUTOSCALING_WARMPOOL> = (resource) => {return {Type: "AWS::AutoScaling::WarmPool", ...resource}}
export const AWS_AUTOSCALINGPLANS_SCALINGPLAN:RESOURCE<_AWS_AUTOSCALINGPLANS_SCALINGPLAN> = (resource) => {return {Type: "AWS::AutoScalingPlans::ScalingPlan", ...resource}}
export const AWS_B2BI_CAPABILITY:RESOURCE<_AWS_B2BI_CAPABILITY> = (resource) => {return {Type: "AWS::B2BI::Capability", ...resource}}
export const AWS_B2BI_PARTNERSHIP:RESOURCE<_AWS_B2BI_PARTNERSHIP> = (resource) => {return {Type: "AWS::B2BI::Partnership", ...resource}}
export const AWS_B2BI_PROFILE:RESOURCE<_AWS_B2BI_PROFILE> = (resource) => {return {Type: "AWS::B2BI::Profile", ...resource}}
export const AWS_B2BI_TRANSFORMER:RESOURCE<_AWS_B2BI_TRANSFORMER> = (resource) => {return {Type: "AWS::B2BI::Transformer", ...resource}}
export const AWS_BACKUP_BACKUPPLAN:RESOURCE<_AWS_BACKUP_BACKUPPLAN> = (resource) => {return {Type: "AWS::Backup::BackupPlan", ...resource}}
export const AWS_BACKUP_BACKUPSELECTION:RESOURCE<_AWS_BACKUP_BACKUPSELECTION> = (resource) => {return {Type: "AWS::Backup::BackupSelection", ...resource}}
export const AWS_BACKUP_BACKUPVAULT:RESOURCE<_AWS_BACKUP_BACKUPVAULT> = (resource) => {return {Type: "AWS::Backup::BackupVault", ...resource}}
export const AWS_BACKUP_FRAMEWORK:RESOURCE<_AWS_BACKUP_FRAMEWORK> = (resource) => {return {Type: "AWS::Backup::Framework", ...resource}}
export const AWS_BACKUP_REPORTPLAN:RESOURCE<_AWS_BACKUP_REPORTPLAN> = (resource) => {return {Type: "AWS::Backup::ReportPlan", ...resource}}
export const AWS_BACKUP_RESTORETESTINGPLAN:RESOURCE<_AWS_BACKUP_RESTORETESTINGPLAN> = (resource) => {return {Type: "AWS::Backup::RestoreTestingPlan", ...resource}}
export const AWS_BACKUP_RESTORETESTINGSELECTION:RESOURCE<_AWS_BACKUP_RESTORETESTINGSELECTION> = (resource) => {return {Type: "AWS::Backup::RestoreTestingSelection", ...resource}}
export const AWS_BACKUPGATEWAY_HYPERVISOR:RESOURCE<_AWS_BACKUPGATEWAY_HYPERVISOR> = (resource) => {return {Type: "AWS::BackupGateway::Hypervisor", ...resource}}
export const AWS_BATCH_COMPUTEENVIRONMENT:RESOURCE<_AWS_BATCH_COMPUTEENVIRONMENT> = (resource) => {return {Type: "AWS::Batch::ComputeEnvironment", ...resource}}
export const AWS_BATCH_JOBDEFINITION:RESOURCE<_AWS_BATCH_JOBDEFINITION> = (resource) => {return {Type: "AWS::Batch::JobDefinition", ...resource}}
export const AWS_BATCH_JOBQUEUE:RESOURCE<_AWS_BATCH_JOBQUEUE> = (resource) => {return {Type: "AWS::Batch::JobQueue", ...resource}}
export const AWS_BATCH_SCHEDULINGPOLICY:RESOURCE<_AWS_BATCH_SCHEDULINGPOLICY> = (resource) => {return {Type: "AWS::Batch::SchedulingPolicy", ...resource}}
export const AWS_BCMDATAEXPORTS_EXPORT:RESOURCE<_AWS_BCMDATAEXPORTS_EXPORT> = (resource) => {return {Type: "AWS::BCMDataExports::Export", ...resource}}
export const AWS_BEDROCK_AGENT:RESOURCE<_AWS_BEDROCK_AGENT> = (resource) => {return {Type: "AWS::Bedrock::Agent", ...resource}}
export const AWS_BEDROCK_AGENTALIAS:RESOURCE<_AWS_BEDROCK_AGENTALIAS> = (resource) => {return {Type: "AWS::Bedrock::AgentAlias", ...resource}}
export const AWS_BEDROCK_DATASOURCE:RESOURCE<_AWS_BEDROCK_DATASOURCE> = (resource) => {return {Type: "AWS::Bedrock::DataSource", ...resource}}
export const AWS_BEDROCK_FLOW:RESOURCE<_AWS_BEDROCK_FLOW> = (resource) => {return {Type: "AWS::Bedrock::Flow", ...resource}}
export const AWS_BEDROCK_FLOWALIAS:RESOURCE<_AWS_BEDROCK_FLOWALIAS> = (resource) => {return {Type: "AWS::Bedrock::FlowAlias", ...resource}}
export const AWS_BEDROCK_FLOWVERSION:RESOURCE<_AWS_BEDROCK_FLOWVERSION> = (resource) => {return {Type: "AWS::Bedrock::FlowVersion", ...resource}}
export const AWS_BEDROCK_GUARDRAIL:RESOURCE<_AWS_BEDROCK_GUARDRAIL> = (resource) => {return {Type: "AWS::Bedrock::Guardrail", ...resource}}
export const AWS_BEDROCK_GUARDRAILVERSION:RESOURCE<_AWS_BEDROCK_GUARDRAILVERSION> = (resource) => {return {Type: "AWS::Bedrock::GuardrailVersion", ...resource}}
export const AWS_BEDROCK_KNOWLEDGEBASE:RESOURCE<_AWS_BEDROCK_KNOWLEDGEBASE> = (resource) => {return {Type: "AWS::Bedrock::KnowledgeBase", ...resource}}
export const AWS_BEDROCK_PROMPT:RESOURCE<_AWS_BEDROCK_PROMPT> = (resource) => {return {Type: "AWS::Bedrock::Prompt", ...resource}}
export const AWS_BEDROCK_PROMPTVERSION:RESOURCE<_AWS_BEDROCK_PROMPTVERSION> = (resource) => {return {Type: "AWS::Bedrock::PromptVersion", ...resource}}
export const AWS_BILLINGCONDUCTOR_BILLINGGROUP:RESOURCE<_AWS_BILLINGCONDUCTOR_BILLINGGROUP> = (resource) => {return {Type: "AWS::BillingConductor::BillingGroup", ...resource}}
export const AWS_BILLINGCONDUCTOR_CUSTOMLINEITEM:RESOURCE<_AWS_BILLINGCONDUCTOR_CUSTOMLINEITEM> = (resource) => {return {Type: "AWS::BillingConductor::CustomLineItem", ...resource}}
export const AWS_BILLINGCONDUCTOR_PRICINGPLAN:RESOURCE<_AWS_BILLINGCONDUCTOR_PRICINGPLAN> = (resource) => {return {Type: "AWS::BillingConductor::PricingPlan", ...resource}}
export const AWS_BILLINGCONDUCTOR_PRICINGRULE:RESOURCE<_AWS_BILLINGCONDUCTOR_PRICINGRULE> = (resource) => {return {Type: "AWS::BillingConductor::PricingRule", ...resource}}
export const AWS_BUDGETS_BUDGET:RESOURCE<_AWS_BUDGETS_BUDGET> = (resource) => {return {Type: "AWS::Budgets::Budget", ...resource}}
export const AWS_BUDGETS_BUDGETSACTION:RESOURCE<_AWS_BUDGETS_BUDGETSACTION> = (resource) => {return {Type: "AWS::Budgets::BudgetsAction", ...resource}}
export const AWS_CASSANDRA_KEYSPACE:RESOURCE<_AWS_CASSANDRA_KEYSPACE> = (resource) => {return {Type: "AWS::Cassandra::Keyspace", ...resource}}
export const AWS_CASSANDRA_TABLE:RESOURCE<_AWS_CASSANDRA_TABLE> = (resource) => {return {Type: "AWS::Cassandra::Table", ...resource}}
export const AWS_CE_ANOMALYMONITOR:RESOURCE<_AWS_CE_ANOMALYMONITOR> = (resource) => {return {Type: "AWS::CE::AnomalyMonitor", ...resource}}
export const AWS_CE_ANOMALYSUBSCRIPTION:RESOURCE<_AWS_CE_ANOMALYSUBSCRIPTION> = (resource) => {return {Type: "AWS::CE::AnomalySubscription", ...resource}}
export const AWS_CE_COSTCATEGORY:RESOURCE<_AWS_CE_COSTCATEGORY> = (resource) => {return {Type: "AWS::CE::CostCategory", ...resource}}
export const AWS_CERTIFICATEMANAGER_ACCOUNT:RESOURCE<_AWS_CERTIFICATEMANAGER_ACCOUNT> = (resource) => {return {Type: "AWS::CertificateManager::Account", ...resource}}
export const AWS_CERTIFICATEMANAGER_CERTIFICATE:RESOURCE<_AWS_CERTIFICATEMANAGER_CERTIFICATE> = (resource) => {return {Type: "AWS::CertificateManager::Certificate", ...resource}}
export const AWS_CHATBOT_MICROSOFTTEAMSCHANNELCONFIGURATION:RESOURCE<_AWS_CHATBOT_MICROSOFTTEAMSCHANNELCONFIGURATION> = (resource) => {return {Type: "AWS::Chatbot::MicrosoftTeamsChannelConfiguration", ...resource}}
export const AWS_CHATBOT_SLACKCHANNELCONFIGURATION:RESOURCE<_AWS_CHATBOT_SLACKCHANNELCONFIGURATION> = (resource) => {return {Type: "AWS::Chatbot::SlackChannelConfiguration", ...resource}}
export const AWS_CLEANROOMS_ANALYSISTEMPLATE:RESOURCE<_AWS_CLEANROOMS_ANALYSISTEMPLATE> = (resource) => {return {Type: "AWS::CleanRooms::AnalysisTemplate", ...resource}}
export const AWS_CLEANROOMS_COLLABORATION:RESOURCE<_AWS_CLEANROOMS_COLLABORATION> = (resource) => {return {Type: "AWS::CleanRooms::Collaboration", ...resource}}
export const AWS_CLEANROOMS_CONFIGUREDTABLE:RESOURCE<_AWS_CLEANROOMS_CONFIGUREDTABLE> = (resource) => {return {Type: "AWS::CleanRooms::ConfiguredTable", ...resource}}
export const AWS_CLEANROOMS_CONFIGUREDTABLEASSOCIATION:RESOURCE<_AWS_CLEANROOMS_CONFIGUREDTABLEASSOCIATION> = (resource) => {return {Type: "AWS::CleanRooms::ConfiguredTableAssociation", ...resource}}
export const AWS_CLEANROOMS_IDMAPPINGTABLE:RESOURCE<_AWS_CLEANROOMS_IDMAPPINGTABLE> = (resource) => {return {Type: "AWS::CleanRooms::IdMappingTable", ...resource}}
export const AWS_CLEANROOMS_IDNAMESPACEASSOCIATION:RESOURCE<_AWS_CLEANROOMS_IDNAMESPACEASSOCIATION> = (resource) => {return {Type: "AWS::CleanRooms::IdNamespaceAssociation", ...resource}}
export const AWS_CLEANROOMS_MEMBERSHIP:RESOURCE<_AWS_CLEANROOMS_MEMBERSHIP> = (resource) => {return {Type: "AWS::CleanRooms::Membership", ...resource}}
export const AWS_CLEANROOMS_PRIVACYBUDGETTEMPLATE:RESOURCE<_AWS_CLEANROOMS_PRIVACYBUDGETTEMPLATE> = (resource) => {return {Type: "AWS::CleanRooms::PrivacyBudgetTemplate", ...resource}}
export const AWS_CLEANROOMSML_TRAININGDATASET:RESOURCE<_AWS_CLEANROOMSML_TRAININGDATASET> = (resource) => {return {Type: "AWS::CleanRoomsML::TrainingDataset", ...resource}}
export const AWS_CLOUD9_ENVIRONMENTEC2:RESOURCE<_AWS_CLOUD9_ENVIRONMENTEC2> = (resource) => {return {Type: "AWS::Cloud9::EnvironmentEC2", ...resource}}
export const AWS_CLOUDFORMATION_CUSTOMRESOURCE:RESOURCE<_AWS_CLOUDFORMATION_CUSTOMRESOURCE> = (resource) => {return {Type: "AWS::CloudFormation::CustomResource", ...resource}}
export const AWS_CLOUDFORMATION_HOOKDEFAULTVERSION:RESOURCE<_AWS_CLOUDFORMATION_HOOKDEFAULTVERSION> = (resource) => {return {Type: "AWS::CloudFormation::HookDefaultVersion", ...resource}}
export const AWS_CLOUDFORMATION_HOOKTYPECONFIG:RESOURCE<_AWS_CLOUDFORMATION_HOOKTYPECONFIG> = (resource) => {return {Type: "AWS::CloudFormation::HookTypeConfig", ...resource}}
export const AWS_CLOUDFORMATION_HOOKVERSION:RESOURCE<_AWS_CLOUDFORMATION_HOOKVERSION> = (resource) => {return {Type: "AWS::CloudFormation::HookVersion", ...resource}}
export const AWS_CLOUDFORMATION_MACRO:RESOURCE<_AWS_CLOUDFORMATION_MACRO> = (resource) => {return {Type: "AWS::CloudFormation::Macro", ...resource}}
export const AWS_CLOUDFORMATION_MODULEDEFAULTVERSION:RESOURCE<_AWS_CLOUDFORMATION_MODULEDEFAULTVERSION> = (resource) => {return {Type: "AWS::CloudFormation::ModuleDefaultVersion", ...resource}}
export const AWS_CLOUDFORMATION_MODULEVERSION:RESOURCE<_AWS_CLOUDFORMATION_MODULEVERSION> = (resource) => {return {Type: "AWS::CloudFormation::ModuleVersion", ...resource}}
export const AWS_CLOUDFORMATION_PUBLICTYPEVERSION:RESOURCE<_AWS_CLOUDFORMATION_PUBLICTYPEVERSION> = (resource) => {return {Type: "AWS::CloudFormation::PublicTypeVersion", ...resource}}
export const AWS_CLOUDFORMATION_PUBLISHER:RESOURCE<_AWS_CLOUDFORMATION_PUBLISHER> = (resource) => {return {Type: "AWS::CloudFormation::Publisher", ...resource}}
export const AWS_CLOUDFORMATION_RESOURCEDEFAULTVERSION:RESOURCE<_AWS_CLOUDFORMATION_RESOURCEDEFAULTVERSION> = (resource) => {return {Type: "AWS::CloudFormation::ResourceDefaultVersion", ...resource}}
export const AWS_CLOUDFORMATION_RESOURCEVERSION:RESOURCE<_AWS_CLOUDFORMATION_RESOURCEVERSION> = (resource) => {return {Type: "AWS::CloudFormation::ResourceVersion", ...resource}}
export const AWS_CLOUDFORMATION_STACK:RESOURCE<_AWS_CLOUDFORMATION_STACK> = (resource) => {return {Type: "AWS::CloudFormation::Stack", ...resource}}
export const AWS_CLOUDFORMATION_STACKSET:RESOURCE<_AWS_CLOUDFORMATION_STACKSET> = (resource) => {return {Type: "AWS::CloudFormation::StackSet", ...resource}}
export const AWS_CLOUDFORMATION_TYPEACTIVATION:RESOURCE<_AWS_CLOUDFORMATION_TYPEACTIVATION> = (resource) => {return {Type: "AWS::CloudFormation::TypeActivation", ...resource}}
export const AWS_CLOUDFORMATION_WAITCONDITION:RESOURCE<_AWS_CLOUDFORMATION_WAITCONDITION> = (resource) => {return {Type: "AWS::CloudFormation::WaitCondition", ...resource}}
export const AWS_CLOUDFORMATION_WAITCONDITIONHANDLE:RESOURCE<_AWS_CLOUDFORMATION_WAITCONDITIONHANDLE> = (resource) => {return {Type: "AWS::CloudFormation::WaitConditionHandle", ...resource}}
export const AWS_CLOUDFRONT_CACHEPOLICY:RESOURCE<_AWS_CLOUDFRONT_CACHEPOLICY> = (resource) => {return {Type: "AWS::CloudFront::CachePolicy", ...resource}}
export const AWS_CLOUDFRONT_CLOUDFRONTORIGINACCESSIDENTITY:RESOURCE<_AWS_CLOUDFRONT_CLOUDFRONTORIGINACCESSIDENTITY> = (resource) => {return {Type: "AWS::CloudFront::CloudFrontOriginAccessIdentity", ...resource}}
export const AWS_CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY:RESOURCE<_AWS_CLOUDFRONT_CONTINUOUSDEPLOYMENTPOLICY> = (resource) => {return {Type: "AWS::CloudFront::ContinuousDeploymentPolicy", ...resource}}
export const AWS_CLOUDFRONT_DISTRIBUTION:RESOURCE<_AWS_CLOUDFRONT_DISTRIBUTION> = (resource) => {return {Type: "AWS::CloudFront::Distribution", ...resource}}
export const AWS_CLOUDFRONT_FUNCTION:RESOURCE<_AWS_CLOUDFRONT_FUNCTION> = (resource) => {return {Type: "AWS::CloudFront::Function", ...resource}}
export const AWS_CLOUDFRONT_KEYGROUP:RESOURCE<_AWS_CLOUDFRONT_KEYGROUP> = (resource) => {return {Type: "AWS::CloudFront::KeyGroup", ...resource}}
export const AWS_CLOUDFRONT_KEYVALUESTORE:RESOURCE<_AWS_CLOUDFRONT_KEYVALUESTORE> = (resource) => {return {Type: "AWS::CloudFront::KeyValueStore", ...resource}}
export const AWS_CLOUDFRONT_MONITORINGSUBSCRIPTION:RESOURCE<_AWS_CLOUDFRONT_MONITORINGSUBSCRIPTION> = (resource) => {return {Type: "AWS::CloudFront::MonitoringSubscription", ...resource}}
export const AWS_CLOUDFRONT_ORIGINACCESSCONTROL:RESOURCE<_AWS_CLOUDFRONT_ORIGINACCESSCONTROL> = (resource) => {return {Type: "AWS::CloudFront::OriginAccessControl", ...resource}}
export const AWS_CLOUDFRONT_ORIGINREQUESTPOLICY:RESOURCE<_AWS_CLOUDFRONT_ORIGINREQUESTPOLICY> = (resource) => {return {Type: "AWS::CloudFront::OriginRequestPolicy", ...resource}}
export const AWS_CLOUDFRONT_PUBLICKEY:RESOURCE<_AWS_CLOUDFRONT_PUBLICKEY> = (resource) => {return {Type: "AWS::CloudFront::PublicKey", ...resource}}
export const AWS_CLOUDFRONT_REALTIMELOGCONFIG:RESOURCE<_AWS_CLOUDFRONT_REALTIMELOGCONFIG> = (resource) => {return {Type: "AWS::CloudFront::RealtimeLogConfig", ...resource}}
export const AWS_CLOUDFRONT_RESPONSEHEADERSPOLICY:RESOURCE<_AWS_CLOUDFRONT_RESPONSEHEADERSPOLICY> = (resource) => {return {Type: "AWS::CloudFront::ResponseHeadersPolicy", ...resource}}
export const AWS_CLOUDFRONT_STREAMINGDISTRIBUTION:RESOURCE<_AWS_CLOUDFRONT_STREAMINGDISTRIBUTION> = (resource) => {return {Type: "AWS::CloudFront::StreamingDistribution", ...resource}}
export const AWS_CLOUDTRAIL_CHANNEL:RESOURCE<_AWS_CLOUDTRAIL_CHANNEL> = (resource) => {return {Type: "AWS::CloudTrail::Channel", ...resource}}
export const AWS_CLOUDTRAIL_EVENTDATASTORE:RESOURCE<_AWS_CLOUDTRAIL_EVENTDATASTORE> = (resource) => {return {Type: "AWS::CloudTrail::EventDataStore", ...resource}}
export const AWS_CLOUDTRAIL_RESOURCEPOLICY:RESOURCE<_AWS_CLOUDTRAIL_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::CloudTrail::ResourcePolicy", ...resource}}
export const AWS_CLOUDTRAIL_TRAIL:RESOURCE<_AWS_CLOUDTRAIL_TRAIL> = (resource) => {return {Type: "AWS::CloudTrail::Trail", ...resource}}
export const AWS_CLOUDWATCH_ALARM:RESOURCE<_AWS_CLOUDWATCH_ALARM> = (resource) => {return {Type: "AWS::CloudWatch::Alarm", ...resource}}
export const AWS_CLOUDWATCH_ANOMALYDETECTOR:RESOURCE<_AWS_CLOUDWATCH_ANOMALYDETECTOR> = (resource) => {return {Type: "AWS::CloudWatch::AnomalyDetector", ...resource}}
export const AWS_CLOUDWATCH_COMPOSITEALARM:RESOURCE<_AWS_CLOUDWATCH_COMPOSITEALARM> = (resource) => {return {Type: "AWS::CloudWatch::CompositeAlarm", ...resource}}
export const AWS_CLOUDWATCH_DASHBOARD:RESOURCE<_AWS_CLOUDWATCH_DASHBOARD> = (resource) => {return {Type: "AWS::CloudWatch::Dashboard", ...resource}}
export const AWS_CLOUDWATCH_INSIGHTRULE:RESOURCE<_AWS_CLOUDWATCH_INSIGHTRULE> = (resource) => {return {Type: "AWS::CloudWatch::InsightRule", ...resource}}
export const AWS_CODEARTIFACT_DOMAIN:RESOURCE<_AWS_CODEARTIFACT_DOMAIN> = (resource) => {return {Type: "AWS::CodeArtifact::Domain", ...resource}}
export const AWS_CODEARTIFACT_PACKAGEGROUP:RESOURCE<_AWS_CODEARTIFACT_PACKAGEGROUP> = (resource) => {return {Type: "AWS::CodeArtifact::PackageGroup", ...resource}}
export const AWS_CODEARTIFACT_REPOSITORY:RESOURCE<_AWS_CODEARTIFACT_REPOSITORY> = (resource) => {return {Type: "AWS::CodeArtifact::Repository", ...resource}}
export const AWS_CODEBUILD_FLEET:RESOURCE<_AWS_CODEBUILD_FLEET> = (resource) => {return {Type: "AWS::CodeBuild::Fleet", ...resource}}
export const AWS_CODEBUILD_PROJECT:RESOURCE<_AWS_CODEBUILD_PROJECT> = (resource) => {return {Type: "AWS::CodeBuild::Project", ...resource}}
export const AWS_CODEBUILD_REPORTGROUP:RESOURCE<_AWS_CODEBUILD_REPORTGROUP> = (resource) => {return {Type: "AWS::CodeBuild::ReportGroup", ...resource}}
export const AWS_CODEBUILD_SOURCECREDENTIAL:RESOURCE<_AWS_CODEBUILD_SOURCECREDENTIAL> = (resource) => {return {Type: "AWS::CodeBuild::SourceCredential", ...resource}}
export const AWS_CODECOMMIT_REPOSITORY:RESOURCE<_AWS_CODECOMMIT_REPOSITORY> = (resource) => {return {Type: "AWS::CodeCommit::Repository", ...resource}}
export const AWS_CODECONNECTIONS_CONNECTION:RESOURCE<_AWS_CODECONNECTIONS_CONNECTION> = (resource) => {return {Type: "AWS::CodeConnections::Connection", ...resource}}
export const AWS_CODEDEPLOY_APPLICATION:RESOURCE<_AWS_CODEDEPLOY_APPLICATION> = (resource) => {return {Type: "AWS::CodeDeploy::Application", ...resource}}
export const AWS_CODEDEPLOY_DEPLOYMENTCONFIG:RESOURCE<_AWS_CODEDEPLOY_DEPLOYMENTCONFIG> = (resource) => {return {Type: "AWS::CodeDeploy::DeploymentConfig", ...resource}}
export const AWS_CODEDEPLOY_DEPLOYMENTGROUP:RESOURCE<_AWS_CODEDEPLOY_DEPLOYMENTGROUP> = (resource) => {return {Type: "AWS::CodeDeploy::DeploymentGroup", ...resource}}
export const AWS_CODEGURUPROFILER_PROFILINGGROUP:RESOURCE<_AWS_CODEGURUPROFILER_PROFILINGGROUP> = (resource) => {return {Type: "AWS::CodeGuruProfiler::ProfilingGroup", ...resource}}
export const AWS_CODEGURUREVIEWER_REPOSITORYASSOCIATION:RESOURCE<_AWS_CODEGURUREVIEWER_REPOSITORYASSOCIATION> = (resource) => {return {Type: "AWS::CodeGuruReviewer::RepositoryAssociation", ...resource}}
export const AWS_CODEPIPELINE_CUSTOMACTIONTYPE:RESOURCE<_AWS_CODEPIPELINE_CUSTOMACTIONTYPE> = (resource) => {return {Type: "AWS::CodePipeline::CustomActionType", ...resource}}
export const AWS_CODEPIPELINE_PIPELINE:RESOURCE<_AWS_CODEPIPELINE_PIPELINE> = (resource) => {return {Type: "AWS::CodePipeline::Pipeline", ...resource}}
export const AWS_CODEPIPELINE_WEBHOOK:RESOURCE<_AWS_CODEPIPELINE_WEBHOOK> = (resource) => {return {Type: "AWS::CodePipeline::Webhook", ...resource}}
export const AWS_CODESTAR_GITHUBREPOSITORY:RESOURCE<_AWS_CODESTAR_GITHUBREPOSITORY> = (resource) => {return {Type: "AWS::CodeStar::GitHubRepository", ...resource}}
export const AWS_CODESTARCONNECTIONS_CONNECTION:RESOURCE<_AWS_CODESTARCONNECTIONS_CONNECTION> = (resource) => {return {Type: "AWS::CodeStarConnections::Connection", ...resource}}
export const AWS_CODESTARCONNECTIONS_REPOSITORYLINK:RESOURCE<_AWS_CODESTARCONNECTIONS_REPOSITORYLINK> = (resource) => {return {Type: "AWS::CodeStarConnections::RepositoryLink", ...resource}}
export const AWS_CODESTARCONNECTIONS_SYNCCONFIGURATION:RESOURCE<_AWS_CODESTARCONNECTIONS_SYNCCONFIGURATION> = (resource) => {return {Type: "AWS::CodeStarConnections::SyncConfiguration", ...resource}}
export const AWS_CODESTARNOTIFICATIONS_NOTIFICATIONRULE:RESOURCE<_AWS_CODESTARNOTIFICATIONS_NOTIFICATIONRULE> = (resource) => {return {Type: "AWS::CodeStarNotifications::NotificationRule", ...resource}}
export const AWS_COGNITO_IDENTITYPOOL:RESOURCE<_AWS_COGNITO_IDENTITYPOOL> = (resource) => {return {Type: "AWS::Cognito::IdentityPool", ...resource}}
export const AWS_COGNITO_IDENTITYPOOLPRINCIPALTAG:RESOURCE<_AWS_COGNITO_IDENTITYPOOLPRINCIPALTAG> = (resource) => {return {Type: "AWS::Cognito::IdentityPoolPrincipalTag", ...resource}}
export const AWS_COGNITO_IDENTITYPOOLROLEATTACHMENT:RESOURCE<_AWS_COGNITO_IDENTITYPOOLROLEATTACHMENT> = (resource) => {return {Type: "AWS::Cognito::IdentityPoolRoleAttachment", ...resource}}
export const AWS_COGNITO_LOGDELIVERYCONFIGURATION:RESOURCE<_AWS_COGNITO_LOGDELIVERYCONFIGURATION> = (resource) => {return {Type: "AWS::Cognito::LogDeliveryConfiguration", ...resource}}
export const AWS_COGNITO_USERPOOL:RESOURCE<_AWS_COGNITO_USERPOOL> = (resource) => {return {Type: "AWS::Cognito::UserPool", ...resource}}
export const AWS_COGNITO_USERPOOLCLIENT:RESOURCE<_AWS_COGNITO_USERPOOLCLIENT> = (resource) => {return {Type: "AWS::Cognito::UserPoolClient", ...resource}}
export const AWS_COGNITO_USERPOOLDOMAIN:RESOURCE<_AWS_COGNITO_USERPOOLDOMAIN> = (resource) => {return {Type: "AWS::Cognito::UserPoolDomain", ...resource}}
export const AWS_COGNITO_USERPOOLGROUP:RESOURCE<_AWS_COGNITO_USERPOOLGROUP> = (resource) => {return {Type: "AWS::Cognito::UserPoolGroup", ...resource}}
export const AWS_COGNITO_USERPOOLIDENTITYPROVIDER:RESOURCE<_AWS_COGNITO_USERPOOLIDENTITYPROVIDER> = (resource) => {return {Type: "AWS::Cognito::UserPoolIdentityProvider", ...resource}}
export const AWS_COGNITO_USERPOOLRESOURCESERVER:RESOURCE<_AWS_COGNITO_USERPOOLRESOURCESERVER> = (resource) => {return {Type: "AWS::Cognito::UserPoolResourceServer", ...resource}}
export const AWS_COGNITO_USERPOOLRISKCONFIGURATIONATTACHMENT:RESOURCE<_AWS_COGNITO_USERPOOLRISKCONFIGURATIONATTACHMENT> = (resource) => {return {Type: "AWS::Cognito::UserPoolRiskConfigurationAttachment", ...resource}}
export const AWS_COGNITO_USERPOOLUICUSTOMIZATIONATTACHMENT:RESOURCE<_AWS_COGNITO_USERPOOLUICUSTOMIZATIONATTACHMENT> = (resource) => {return {Type: "AWS::Cognito::UserPoolUICustomizationAttachment", ...resource}}
export const AWS_COGNITO_USERPOOLUSER:RESOURCE<_AWS_COGNITO_USERPOOLUSER> = (resource) => {return {Type: "AWS::Cognito::UserPoolUser", ...resource}}
export const AWS_COGNITO_USERPOOLUSERTOGROUPATTACHMENT:RESOURCE<_AWS_COGNITO_USERPOOLUSERTOGROUPATTACHMENT> = (resource) => {return {Type: "AWS::Cognito::UserPoolUserToGroupAttachment", ...resource}}
export const AWS_COMPREHEND_DOCUMENTCLASSIFIER:RESOURCE<_AWS_COMPREHEND_DOCUMENTCLASSIFIER> = (resource) => {return {Type: "AWS::Comprehend::DocumentClassifier", ...resource}}
export const AWS_COMPREHEND_FLYWHEEL:RESOURCE<_AWS_COMPREHEND_FLYWHEEL> = (resource) => {return {Type: "AWS::Comprehend::Flywheel", ...resource}}
export const AWS_CONFIG_AGGREGATIONAUTHORIZATION:RESOURCE<_AWS_CONFIG_AGGREGATIONAUTHORIZATION> = (resource) => {return {Type: "AWS::Config::AggregationAuthorization", ...resource}}
export const AWS_CONFIG_CONFIGRULE:RESOURCE<_AWS_CONFIG_CONFIGRULE> = (resource) => {return {Type: "AWS::Config::ConfigRule", ...resource}}
export const AWS_CONFIG_CONFIGURATIONAGGREGATOR:RESOURCE<_AWS_CONFIG_CONFIGURATIONAGGREGATOR> = (resource) => {return {Type: "AWS::Config::ConfigurationAggregator", ...resource}}
export const AWS_CONFIG_CONFIGURATIONRECORDER:RESOURCE<_AWS_CONFIG_CONFIGURATIONRECORDER> = (resource) => {return {Type: "AWS::Config::ConfigurationRecorder", ...resource}}
export const AWS_CONFIG_CONFORMANCEPACK:RESOURCE<_AWS_CONFIG_CONFORMANCEPACK> = (resource) => {return {Type: "AWS::Config::ConformancePack", ...resource}}
export const AWS_CONFIG_DELIVERYCHANNEL:RESOURCE<_AWS_CONFIG_DELIVERYCHANNEL> = (resource) => {return {Type: "AWS::Config::DeliveryChannel", ...resource}}
export const AWS_CONFIG_ORGANIZATIONCONFIGRULE:RESOURCE<_AWS_CONFIG_ORGANIZATIONCONFIGRULE> = (resource) => {return {Type: "AWS::Config::OrganizationConfigRule", ...resource}}
export const AWS_CONFIG_ORGANIZATIONCONFORMANCEPACK:RESOURCE<_AWS_CONFIG_ORGANIZATIONCONFORMANCEPACK> = (resource) => {return {Type: "AWS::Config::OrganizationConformancePack", ...resource}}
export const AWS_CONFIG_REMEDIATIONCONFIGURATION:RESOURCE<_AWS_CONFIG_REMEDIATIONCONFIGURATION> = (resource) => {return {Type: "AWS::Config::RemediationConfiguration", ...resource}}
export const AWS_CONFIG_STOREDQUERY:RESOURCE<_AWS_CONFIG_STOREDQUERY> = (resource) => {return {Type: "AWS::Config::StoredQuery", ...resource}}
export const AWS_CONNECT_AGENTSTATUS:RESOURCE<_AWS_CONNECT_AGENTSTATUS> = (resource) => {return {Type: "AWS::Connect::AgentStatus", ...resource}}
export const AWS_CONNECT_APPROVEDORIGIN:RESOURCE<_AWS_CONNECT_APPROVEDORIGIN> = (resource) => {return {Type: "AWS::Connect::ApprovedOrigin", ...resource}}
export const AWS_CONNECT_CONTACTFLOW:RESOURCE<_AWS_CONNECT_CONTACTFLOW> = (resource) => {return {Type: "AWS::Connect::ContactFlow", ...resource}}
export const AWS_CONNECT_CONTACTFLOWMODULE:RESOURCE<_AWS_CONNECT_CONTACTFLOWMODULE> = (resource) => {return {Type: "AWS::Connect::ContactFlowModule", ...resource}}
export const AWS_CONNECT_EVALUATIONFORM:RESOURCE<_AWS_CONNECT_EVALUATIONFORM> = (resource) => {return {Type: "AWS::Connect::EvaluationForm", ...resource}}
export const AWS_CONNECT_HOURSOFOPERATION:RESOURCE<_AWS_CONNECT_HOURSOFOPERATION> = (resource) => {return {Type: "AWS::Connect::HoursOfOperation", ...resource}}
export const AWS_CONNECT_INSTANCE:RESOURCE<_AWS_CONNECT_INSTANCE> = (resource) => {return {Type: "AWS::Connect::Instance", ...resource}}
export const AWS_CONNECT_INSTANCESTORAGECONFIG:RESOURCE<_AWS_CONNECT_INSTANCESTORAGECONFIG> = (resource) => {return {Type: "AWS::Connect::InstanceStorageConfig", ...resource}}
export const AWS_CONNECT_INTEGRATIONASSOCIATION:RESOURCE<_AWS_CONNECT_INTEGRATIONASSOCIATION> = (resource) => {return {Type: "AWS::Connect::IntegrationAssociation", ...resource}}
export const AWS_CONNECT_PHONENUMBER:RESOURCE<_AWS_CONNECT_PHONENUMBER> = (resource) => {return {Type: "AWS::Connect::PhoneNumber", ...resource}}
export const AWS_CONNECT_PREDEFINEDATTRIBUTE:RESOURCE<_AWS_CONNECT_PREDEFINEDATTRIBUTE> = (resource) => {return {Type: "AWS::Connect::PredefinedAttribute", ...resource}}
export const AWS_CONNECT_PROMPT:RESOURCE<_AWS_CONNECT_PROMPT> = (resource) => {return {Type: "AWS::Connect::Prompt", ...resource}}
export const AWS_CONNECT_QUEUE:RESOURCE<_AWS_CONNECT_QUEUE> = (resource) => {return {Type: "AWS::Connect::Queue", ...resource}}
export const AWS_CONNECT_QUICKCONNECT:RESOURCE<_AWS_CONNECT_QUICKCONNECT> = (resource) => {return {Type: "AWS::Connect::QuickConnect", ...resource}}
export const AWS_CONNECT_ROUTINGPROFILE:RESOURCE<_AWS_CONNECT_ROUTINGPROFILE> = (resource) => {return {Type: "AWS::Connect::RoutingProfile", ...resource}}
export const AWS_CONNECT_RULE:RESOURCE<_AWS_CONNECT_RULE> = (resource) => {return {Type: "AWS::Connect::Rule", ...resource}}
export const AWS_CONNECT_SECURITYKEY:RESOURCE<_AWS_CONNECT_SECURITYKEY> = (resource) => {return {Type: "AWS::Connect::SecurityKey", ...resource}}
export const AWS_CONNECT_SECURITYPROFILE:RESOURCE<_AWS_CONNECT_SECURITYPROFILE> = (resource) => {return {Type: "AWS::Connect::SecurityProfile", ...resource}}
export const AWS_CONNECT_TASKTEMPLATE:RESOURCE<_AWS_CONNECT_TASKTEMPLATE> = (resource) => {return {Type: "AWS::Connect::TaskTemplate", ...resource}}
export const AWS_CONNECT_TRAFFICDISTRIBUTIONGROUP:RESOURCE<_AWS_CONNECT_TRAFFICDISTRIBUTIONGROUP> = (resource) => {return {Type: "AWS::Connect::TrafficDistributionGroup", ...resource}}
export const AWS_CONNECT_USER:RESOURCE<_AWS_CONNECT_USER> = (resource) => {return {Type: "AWS::Connect::User", ...resource}}
export const AWS_CONNECT_USERHIERARCHYGROUP:RESOURCE<_AWS_CONNECT_USERHIERARCHYGROUP> = (resource) => {return {Type: "AWS::Connect::UserHierarchyGroup", ...resource}}
export const AWS_CONNECT_USERHIERARCHYSTRUCTURE:RESOURCE<_AWS_CONNECT_USERHIERARCHYSTRUCTURE> = (resource) => {return {Type: "AWS::Connect::UserHierarchyStructure", ...resource}}
export const AWS_CONNECT_VIEW:RESOURCE<_AWS_CONNECT_VIEW> = (resource) => {return {Type: "AWS::Connect::View", ...resource}}
export const AWS_CONNECT_VIEWVERSION:RESOURCE<_AWS_CONNECT_VIEWVERSION> = (resource) => {return {Type: "AWS::Connect::ViewVersion", ...resource}}
export const AWS_CONNECTCAMPAIGNS_CAMPAIGN:RESOURCE<_AWS_CONNECTCAMPAIGNS_CAMPAIGN> = (resource) => {return {Type: "AWS::ConnectCampaigns::Campaign", ...resource}}
export const AWS_CONTROLTOWER_ENABLEDBASELINE:RESOURCE<_AWS_CONTROLTOWER_ENABLEDBASELINE> = (resource) => {return {Type: "AWS::ControlTower::EnabledBaseline", ...resource}}
export const AWS_CONTROLTOWER_ENABLEDCONTROL:RESOURCE<_AWS_CONTROLTOWER_ENABLEDCONTROL> = (resource) => {return {Type: "AWS::ControlTower::EnabledControl", ...resource}}
export const AWS_CONTROLTOWER_LANDINGZONE:RESOURCE<_AWS_CONTROLTOWER_LANDINGZONE> = (resource) => {return {Type: "AWS::ControlTower::LandingZone", ...resource}}
export const AWS_CUR_REPORTDEFINITION:RESOURCE<_AWS_CUR_REPORTDEFINITION> = (resource) => {return {Type: "AWS::CUR::ReportDefinition", ...resource}}
export const AWS_CUSTOMERPROFILES_CALCULATEDATTRIBUTEDEFINITION:RESOURCE<_AWS_CUSTOMERPROFILES_CALCULATEDATTRIBUTEDEFINITION> = (resource) => {return {Type: "AWS::CustomerProfiles::CalculatedAttributeDefinition", ...resource}}
export const AWS_CUSTOMERPROFILES_DOMAIN:RESOURCE<_AWS_CUSTOMERPROFILES_DOMAIN> = (resource) => {return {Type: "AWS::CustomerProfiles::Domain", ...resource}}
export const AWS_CUSTOMERPROFILES_EVENTSTREAM:RESOURCE<_AWS_CUSTOMERPROFILES_EVENTSTREAM> = (resource) => {return {Type: "AWS::CustomerProfiles::EventStream", ...resource}}
export const AWS_CUSTOMERPROFILES_INTEGRATION:RESOURCE<_AWS_CUSTOMERPROFILES_INTEGRATION> = (resource) => {return {Type: "AWS::CustomerProfiles::Integration", ...resource}}
export const AWS_CUSTOMERPROFILES_OBJECTTYPE:RESOURCE<_AWS_CUSTOMERPROFILES_OBJECTTYPE> = (resource) => {return {Type: "AWS::CustomerProfiles::ObjectType", ...resource}}
export const AWS_DATABREW_DATASET:RESOURCE<_AWS_DATABREW_DATASET> = (resource) => {return {Type: "AWS::DataBrew::Dataset", ...resource}}
export const AWS_DATABREW_JOB:RESOURCE<_AWS_DATABREW_JOB> = (resource) => {return {Type: "AWS::DataBrew::Job", ...resource}}
export const AWS_DATABREW_PROJECT:RESOURCE<_AWS_DATABREW_PROJECT> = (resource) => {return {Type: "AWS::DataBrew::Project", ...resource}}
export const AWS_DATABREW_RECIPE:RESOURCE<_AWS_DATABREW_RECIPE> = (resource) => {return {Type: "AWS::DataBrew::Recipe", ...resource}}
export const AWS_DATABREW_RULESET:RESOURCE<_AWS_DATABREW_RULESET> = (resource) => {return {Type: "AWS::DataBrew::Ruleset", ...resource}}
export const AWS_DATABREW_SCHEDULE:RESOURCE<_AWS_DATABREW_SCHEDULE> = (resource) => {return {Type: "AWS::DataBrew::Schedule", ...resource}}
export const AWS_DATAPIPELINE_PIPELINE:RESOURCE<_AWS_DATAPIPELINE_PIPELINE> = (resource) => {return {Type: "AWS::DataPipeline::Pipeline", ...resource}}
export const AWS_DATASYNC_AGENT:RESOURCE<_AWS_DATASYNC_AGENT> = (resource) => {return {Type: "AWS::DataSync::Agent", ...resource}}
export const AWS_DATASYNC_LOCATIONAZUREBLOB:RESOURCE<_AWS_DATASYNC_LOCATIONAZUREBLOB> = (resource) => {return {Type: "AWS::DataSync::LocationAzureBlob", ...resource}}
export const AWS_DATASYNC_LOCATIONEFS:RESOURCE<_AWS_DATASYNC_LOCATIONEFS> = (resource) => {return {Type: "AWS::DataSync::LocationEFS", ...resource}}
export const AWS_DATASYNC_LOCATIONFSXLUSTRE:RESOURCE<_AWS_DATASYNC_LOCATIONFSXLUSTRE> = (resource) => {return {Type: "AWS::DataSync::LocationFSxLustre", ...resource}}
export const AWS_DATASYNC_LOCATIONFSXONTAP:RESOURCE<_AWS_DATASYNC_LOCATIONFSXONTAP> = (resource) => {return {Type: "AWS::DataSync::LocationFSxONTAP", ...resource}}
export const AWS_DATASYNC_LOCATIONFSXOPENZFS:RESOURCE<_AWS_DATASYNC_LOCATIONFSXOPENZFS> = (resource) => {return {Type: "AWS::DataSync::LocationFSxOpenZFS", ...resource}}
export const AWS_DATASYNC_LOCATIONFSXWINDOWS:RESOURCE<_AWS_DATASYNC_LOCATIONFSXWINDOWS> = (resource) => {return {Type: "AWS::DataSync::LocationFSxWindows", ...resource}}
export const AWS_DATASYNC_LOCATIONHDFS:RESOURCE<_AWS_DATASYNC_LOCATIONHDFS> = (resource) => {return {Type: "AWS::DataSync::LocationHDFS", ...resource}}
export const AWS_DATASYNC_LOCATIONNFS:RESOURCE<_AWS_DATASYNC_LOCATIONNFS> = (resource) => {return {Type: "AWS::DataSync::LocationNFS", ...resource}}
export const AWS_DATASYNC_LOCATIONOBJECTSTORAGE:RESOURCE<_AWS_DATASYNC_LOCATIONOBJECTSTORAGE> = (resource) => {return {Type: "AWS::DataSync::LocationObjectStorage", ...resource}}
export const AWS_DATASYNC_LOCATIONS3:RESOURCE<_AWS_DATASYNC_LOCATIONS3> = (resource) => {return {Type: "AWS::DataSync::LocationS3", ...resource}}
export const AWS_DATASYNC_LOCATIONSMB:RESOURCE<_AWS_DATASYNC_LOCATIONSMB> = (resource) => {return {Type: "AWS::DataSync::LocationSMB", ...resource}}
export const AWS_DATASYNC_STORAGESYSTEM:RESOURCE<_AWS_DATASYNC_STORAGESYSTEM> = (resource) => {return {Type: "AWS::DataSync::StorageSystem", ...resource}}
export const AWS_DATASYNC_TASK:RESOURCE<_AWS_DATASYNC_TASK> = (resource) => {return {Type: "AWS::DataSync::Task", ...resource}}
export const AWS_DATAZONE_DATASOURCE:RESOURCE<_AWS_DATAZONE_DATASOURCE> = (resource) => {return {Type: "AWS::DataZone::DataSource", ...resource}}
export const AWS_DATAZONE_DOMAIN:RESOURCE<_AWS_DATAZONE_DOMAIN> = (resource) => {return {Type: "AWS::DataZone::Domain", ...resource}}
export const AWS_DATAZONE_ENVIRONMENT:RESOURCE<_AWS_DATAZONE_ENVIRONMENT> = (resource) => {return {Type: "AWS::DataZone::Environment", ...resource}}
export const AWS_DATAZONE_ENVIRONMENTACTIONS:RESOURCE<_AWS_DATAZONE_ENVIRONMENTACTIONS> = (resource) => {return {Type: "AWS::DataZone::EnvironmentActions", ...resource}}
export const AWS_DATAZONE_ENVIRONMENTBLUEPRINTCONFIGURATION:RESOURCE<_AWS_DATAZONE_ENVIRONMENTBLUEPRINTCONFIGURATION> = (resource) => {return {Type: "AWS::DataZone::EnvironmentBlueprintConfiguration", ...resource}}
export const AWS_DATAZONE_ENVIRONMENTPROFILE:RESOURCE<_AWS_DATAZONE_ENVIRONMENTPROFILE> = (resource) => {return {Type: "AWS::DataZone::EnvironmentProfile", ...resource}}
export const AWS_DATAZONE_GROUPPROFILE:RESOURCE<_AWS_DATAZONE_GROUPPROFILE> = (resource) => {return {Type: "AWS::DataZone::GroupProfile", ...resource}}
export const AWS_DATAZONE_PROJECT:RESOURCE<_AWS_DATAZONE_PROJECT> = (resource) => {return {Type: "AWS::DataZone::Project", ...resource}}
export const AWS_DATAZONE_PROJECTMEMBERSHIP:RESOURCE<_AWS_DATAZONE_PROJECTMEMBERSHIP> = (resource) => {return {Type: "AWS::DataZone::ProjectMembership", ...resource}}
export const AWS_DATAZONE_SUBSCRIPTIONTARGET:RESOURCE<_AWS_DATAZONE_SUBSCRIPTIONTARGET> = (resource) => {return {Type: "AWS::DataZone::SubscriptionTarget", ...resource}}
export const AWS_DATAZONE_USERPROFILE:RESOURCE<_AWS_DATAZONE_USERPROFILE> = (resource) => {return {Type: "AWS::DataZone::UserProfile", ...resource}}
export const AWS_DAX_CLUSTER:RESOURCE<_AWS_DAX_CLUSTER> = (resource) => {return {Type: "AWS::DAX::Cluster", ...resource}}
export const AWS_DAX_PARAMETERGROUP:RESOURCE<_AWS_DAX_PARAMETERGROUP> = (resource) => {return {Type: "AWS::DAX::ParameterGroup", ...resource}}
export const AWS_DAX_SUBNETGROUP:RESOURCE<_AWS_DAX_SUBNETGROUP> = (resource) => {return {Type: "AWS::DAX::SubnetGroup", ...resource}}
export const AWS_DEADLINE_FARM:RESOURCE<_AWS_DEADLINE_FARM> = (resource) => {return {Type: "AWS::Deadline::Farm", ...resource}}
export const AWS_DEADLINE_FLEET:RESOURCE<_AWS_DEADLINE_FLEET> = (resource) => {return {Type: "AWS::Deadline::Fleet", ...resource}}
export const AWS_DEADLINE_LICENSEENDPOINT:RESOURCE<_AWS_DEADLINE_LICENSEENDPOINT> = (resource) => {return {Type: "AWS::Deadline::LicenseEndpoint", ...resource}}
export const AWS_DEADLINE_METEREDPRODUCT:RESOURCE<_AWS_DEADLINE_METEREDPRODUCT> = (resource) => {return {Type: "AWS::Deadline::MeteredProduct", ...resource}}
export const AWS_DEADLINE_MONITOR:RESOURCE<_AWS_DEADLINE_MONITOR> = (resource) => {return {Type: "AWS::Deadline::Monitor", ...resource}}
export const AWS_DEADLINE_QUEUE:RESOURCE<_AWS_DEADLINE_QUEUE> = (resource) => {return {Type: "AWS::Deadline::Queue", ...resource}}
export const AWS_DEADLINE_QUEUEENVIRONMENT:RESOURCE<_AWS_DEADLINE_QUEUEENVIRONMENT> = (resource) => {return {Type: "AWS::Deadline::QueueEnvironment", ...resource}}
export const AWS_DEADLINE_QUEUEFLEETASSOCIATION:RESOURCE<_AWS_DEADLINE_QUEUEFLEETASSOCIATION> = (resource) => {return {Type: "AWS::Deadline::QueueFleetAssociation", ...resource}}
export const AWS_DEADLINE_STORAGEPROFILE:RESOURCE<_AWS_DEADLINE_STORAGEPROFILE> = (resource) => {return {Type: "AWS::Deadline::StorageProfile", ...resource}}
export const AWS_DETECTIVE_GRAPH:RESOURCE<_AWS_DETECTIVE_GRAPH> = (resource) => {return {Type: "AWS::Detective::Graph", ...resource}}
export const AWS_DETECTIVE_MEMBERINVITATION:RESOURCE<_AWS_DETECTIVE_MEMBERINVITATION> = (resource) => {return {Type: "AWS::Detective::MemberInvitation", ...resource}}
export const AWS_DETECTIVE_ORGANIZATIONADMIN:RESOURCE<_AWS_DETECTIVE_ORGANIZATIONADMIN> = (resource) => {return {Type: "AWS::Detective::OrganizationAdmin", ...resource}}
export const AWS_DEVOPSGURU_LOGANOMALYDETECTIONINTEGRATION:RESOURCE<_AWS_DEVOPSGURU_LOGANOMALYDETECTIONINTEGRATION> = (resource) => {return {Type: "AWS::DevOpsGuru::LogAnomalyDetectionIntegration", ...resource}}
export const AWS_DEVOPSGURU_NOTIFICATIONCHANNEL:RESOURCE<_AWS_DEVOPSGURU_NOTIFICATIONCHANNEL> = (resource) => {return {Type: "AWS::DevOpsGuru::NotificationChannel", ...resource}}
export const AWS_DEVOPSGURU_RESOURCECOLLECTION:RESOURCE<_AWS_DEVOPSGURU_RESOURCECOLLECTION> = (resource) => {return {Type: "AWS::DevOpsGuru::ResourceCollection", ...resource}}
export const AWS_DIRECTORYSERVICE_MICROSOFTAD:RESOURCE<_AWS_DIRECTORYSERVICE_MICROSOFTAD> = (resource) => {return {Type: "AWS::DirectoryService::MicrosoftAD", ...resource}}
export const AWS_DIRECTORYSERVICE_SIMPLEAD:RESOURCE<_AWS_DIRECTORYSERVICE_SIMPLEAD> = (resource) => {return {Type: "AWS::DirectoryService::SimpleAD", ...resource}}
export const AWS_DLM_LIFECYCLEPOLICY:RESOURCE<_AWS_DLM_LIFECYCLEPOLICY> = (resource) => {return {Type: "AWS::DLM::LifecyclePolicy", ...resource}}
export const AWS_DMS_CERTIFICATE:RESOURCE<_AWS_DMS_CERTIFICATE> = (resource) => {return {Type: "AWS::DMS::Certificate", ...resource}}
export const AWS_DMS_DATAPROVIDER:RESOURCE<_AWS_DMS_DATAPROVIDER> = (resource) => {return {Type: "AWS::DMS::DataProvider", ...resource}}
export const AWS_DMS_ENDPOINT:RESOURCE<_AWS_DMS_ENDPOINT> = (resource) => {return {Type: "AWS::DMS::Endpoint", ...resource}}
export const AWS_DMS_EVENTSUBSCRIPTION:RESOURCE<_AWS_DMS_EVENTSUBSCRIPTION> = (resource) => {return {Type: "AWS::DMS::EventSubscription", ...resource}}
export const AWS_DMS_INSTANCEPROFILE:RESOURCE<_AWS_DMS_INSTANCEPROFILE> = (resource) => {return {Type: "AWS::DMS::InstanceProfile", ...resource}}
export const AWS_DMS_MIGRATIONPROJECT:RESOURCE<_AWS_DMS_MIGRATIONPROJECT> = (resource) => {return {Type: "AWS::DMS::MigrationProject", ...resource}}
export const AWS_DMS_REPLICATIONCONFIG:RESOURCE<_AWS_DMS_REPLICATIONCONFIG> = (resource) => {return {Type: "AWS::DMS::ReplicationConfig", ...resource}}
export const AWS_DMS_REPLICATIONINSTANCE:RESOURCE<_AWS_DMS_REPLICATIONINSTANCE> = (resource) => {return {Type: "AWS::DMS::ReplicationInstance", ...resource}}
export const AWS_DMS_REPLICATIONSUBNETGROUP:RESOURCE<_AWS_DMS_REPLICATIONSUBNETGROUP> = (resource) => {return {Type: "AWS::DMS::ReplicationSubnetGroup", ...resource}}
export const AWS_DMS_REPLICATIONTASK:RESOURCE<_AWS_DMS_REPLICATIONTASK> = (resource) => {return {Type: "AWS::DMS::ReplicationTask", ...resource}}
export const AWS_DOCDB_DBCLUSTER:RESOURCE<_AWS_DOCDB_DBCLUSTER> = (resource) => {return {Type: "AWS::DocDB::DBCluster", ...resource}}
export const AWS_DOCDB_DBCLUSTERPARAMETERGROUP:RESOURCE<_AWS_DOCDB_DBCLUSTERPARAMETERGROUP> = (resource) => {return {Type: "AWS::DocDB::DBClusterParameterGroup", ...resource}}
export const AWS_DOCDB_DBINSTANCE:RESOURCE<_AWS_DOCDB_DBINSTANCE> = (resource) => {return {Type: "AWS::DocDB::DBInstance", ...resource}}
export const AWS_DOCDB_DBSUBNETGROUP:RESOURCE<_AWS_DOCDB_DBSUBNETGROUP> = (resource) => {return {Type: "AWS::DocDB::DBSubnetGroup", ...resource}}
export const AWS_DOCDB_EVENTSUBSCRIPTION:RESOURCE<_AWS_DOCDB_EVENTSUBSCRIPTION> = (resource) => {return {Type: "AWS::DocDB::EventSubscription", ...resource}}
export const AWS_DOCDBELASTIC_CLUSTER:RESOURCE<_AWS_DOCDBELASTIC_CLUSTER> = (resource) => {return {Type: "AWS::DocDBElastic::Cluster", ...resource}}
export const AWS_DYNAMODB_GLOBALTABLE:RESOURCE<_AWS_DYNAMODB_GLOBALTABLE> = (resource) => {return {Type: "AWS::DynamoDB::GlobalTable", ...resource}}
export const AWS_DYNAMODB_TABLE:RESOURCE<_AWS_DYNAMODB_TABLE> = (resource) => {return {Type: "AWS::DynamoDB::Table", ...resource}}
export const AWS_EC2_CAPACITYRESERVATION:RESOURCE<_AWS_EC2_CAPACITYRESERVATION> = (resource) => {return {Type: "AWS::EC2::CapacityReservation", ...resource}}
export const AWS_EC2_CAPACITYRESERVATIONFLEET:RESOURCE<_AWS_EC2_CAPACITYRESERVATIONFLEET> = (resource) => {return {Type: "AWS::EC2::CapacityReservationFleet", ...resource}}
export const AWS_EC2_CARRIERGATEWAY:RESOURCE<_AWS_EC2_CARRIERGATEWAY> = (resource) => {return {Type: "AWS::EC2::CarrierGateway", ...resource}}
export const AWS_EC2_CLIENTVPNAUTHORIZATIONRULE:RESOURCE<_AWS_EC2_CLIENTVPNAUTHORIZATIONRULE> = (resource) => {return {Type: "AWS::EC2::ClientVpnAuthorizationRule", ...resource}}
export const AWS_EC2_CLIENTVPNENDPOINT:RESOURCE<_AWS_EC2_CLIENTVPNENDPOINT> = (resource) => {return {Type: "AWS::EC2::ClientVpnEndpoint", ...resource}}
export const AWS_EC2_CLIENTVPNROUTE:RESOURCE<_AWS_EC2_CLIENTVPNROUTE> = (resource) => {return {Type: "AWS::EC2::ClientVpnRoute", ...resource}}
export const AWS_EC2_CLIENTVPNTARGETNETWORKASSOCIATION:RESOURCE<_AWS_EC2_CLIENTVPNTARGETNETWORKASSOCIATION> = (resource) => {return {Type: "AWS::EC2::ClientVpnTargetNetworkAssociation", ...resource}}
export const AWS_EC2_CUSTOMERGATEWAY:RESOURCE<_AWS_EC2_CUSTOMERGATEWAY> = (resource) => {return {Type: "AWS::EC2::CustomerGateway", ...resource}}
export const AWS_EC2_DHCPOPTIONS:RESOURCE<_AWS_EC2_DHCPOPTIONS> = (resource) => {return {Type: "AWS::EC2::DHCPOptions", ...resource}}
export const AWS_EC2_EC2FLEET:RESOURCE<_AWS_EC2_EC2FLEET> = (resource) => {return {Type: "AWS::EC2::EC2Fleet", ...resource}}
export const AWS_EC2_EGRESSONLYINTERNETGATEWAY:RESOURCE<_AWS_EC2_EGRESSONLYINTERNETGATEWAY> = (resource) => {return {Type: "AWS::EC2::EgressOnlyInternetGateway", ...resource}}
export const AWS_EC2_EIP:RESOURCE<_AWS_EC2_EIP> = (resource) => {return {Type: "AWS::EC2::EIP", ...resource}}
export const AWS_EC2_EIPASSOCIATION:RESOURCE<_AWS_EC2_EIPASSOCIATION> = (resource) => {return {Type: "AWS::EC2::EIPAssociation", ...resource}}
export const AWS_EC2_ENCLAVECERTIFICATEIAMROLEASSOCIATION:RESOURCE<_AWS_EC2_ENCLAVECERTIFICATEIAMROLEASSOCIATION> = (resource) => {return {Type: "AWS::EC2::EnclaveCertificateIamRoleAssociation", ...resource}}
export const AWS_EC2_FLOWLOG:RESOURCE<_AWS_EC2_FLOWLOG> = (resource) => {return {Type: "AWS::EC2::FlowLog", ...resource}}
export const AWS_EC2_GATEWAYROUTETABLEASSOCIATION:RESOURCE<_AWS_EC2_GATEWAYROUTETABLEASSOCIATION> = (resource) => {return {Type: "AWS::EC2::GatewayRouteTableAssociation", ...resource}}
export const AWS_EC2_HOST:RESOURCE<_AWS_EC2_HOST> = (resource) => {return {Type: "AWS::EC2::Host", ...resource}}
export const AWS_EC2_INSTANCE:RESOURCE<_AWS_EC2_INSTANCE> = (resource) => {return {Type: "AWS::EC2::Instance", ...resource}}
export const AWS_EC2_INSTANCECONNECTENDPOINT:RESOURCE<_AWS_EC2_INSTANCECONNECTENDPOINT> = (resource) => {return {Type: "AWS::EC2::InstanceConnectEndpoint", ...resource}}
export const AWS_EC2_INTERNETGATEWAY:RESOURCE<_AWS_EC2_INTERNETGATEWAY> = (resource) => {return {Type: "AWS::EC2::InternetGateway", ...resource}}
export const AWS_EC2_IPAM:RESOURCE<_AWS_EC2_IPAM> = (resource) => {return {Type: "AWS::EC2::IPAM", ...resource}}
export const AWS_EC2_IPAMALLOCATION:RESOURCE<_AWS_EC2_IPAMALLOCATION> = (resource) => {return {Type: "AWS::EC2::IPAMAllocation", ...resource}}
export const AWS_EC2_IPAMPOOL:RESOURCE<_AWS_EC2_IPAMPOOL> = (resource) => {return {Type: "AWS::EC2::IPAMPool", ...resource}}
export const AWS_EC2_IPAMPOOLCIDR:RESOURCE<_AWS_EC2_IPAMPOOLCIDR> = (resource) => {return {Type: "AWS::EC2::IPAMPoolCidr", ...resource}}
export const AWS_EC2_IPAMRESOURCEDISCOVERY:RESOURCE<_AWS_EC2_IPAMRESOURCEDISCOVERY> = (resource) => {return {Type: "AWS::EC2::IPAMResourceDiscovery", ...resource}}
export const AWS_EC2_IPAMRESOURCEDISCOVERYASSOCIATION:RESOURCE<_AWS_EC2_IPAMRESOURCEDISCOVERYASSOCIATION> = (resource) => {return {Type: "AWS::EC2::IPAMResourceDiscoveryAssociation", ...resource}}
export const AWS_EC2_IPAMSCOPE:RESOURCE<_AWS_EC2_IPAMSCOPE> = (resource) => {return {Type: "AWS::EC2::IPAMScope", ...resource}}
export const AWS_EC2_KEYPAIR:RESOURCE<_AWS_EC2_KEYPAIR> = (resource) => {return {Type: "AWS::EC2::KeyPair", ...resource}}
export const AWS_EC2_LAUNCHTEMPLATE:RESOURCE<_AWS_EC2_LAUNCHTEMPLATE> = (resource) => {return {Type: "AWS::EC2::LaunchTemplate", ...resource}}
export const AWS_EC2_LOCALGATEWAYROUTE:RESOURCE<_AWS_EC2_LOCALGATEWAYROUTE> = (resource) => {return {Type: "AWS::EC2::LocalGatewayRoute", ...resource}}
export const AWS_EC2_LOCALGATEWAYROUTETABLE:RESOURCE<_AWS_EC2_LOCALGATEWAYROUTETABLE> = (resource) => {return {Type: "AWS::EC2::LocalGatewayRouteTable", ...resource}}
export const AWS_EC2_LOCALGATEWAYROUTETABLEVIRTUALINTERFACEGROUPASSOCIATION:RESOURCE<_AWS_EC2_LOCALGATEWAYROUTETABLEVIRTUALINTERFACEGROUPASSOCIATION> = (resource) => {return {Type: "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation", ...resource}}
export const AWS_EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION:RESOURCE<_AWS_EC2_LOCALGATEWAYROUTETABLEVPCASSOCIATION> = (resource) => {return {Type: "AWS::EC2::LocalGatewayRouteTableVPCAssociation", ...resource}}
export const AWS_EC2_NATGATEWAY:RESOURCE<_AWS_EC2_NATGATEWAY> = (resource) => {return {Type: "AWS::EC2::NatGateway", ...resource}}
export const AWS_EC2_NETWORKACL:RESOURCE<_AWS_EC2_NETWORKACL> = (resource) => {return {Type: "AWS::EC2::NetworkAcl", ...resource}}
export const AWS_EC2_NETWORKACLENTRY:RESOURCE<_AWS_EC2_NETWORKACLENTRY> = (resource) => {return {Type: "AWS::EC2::NetworkAclEntry", ...resource}}
export const AWS_EC2_NETWORKINSIGHTSACCESSSCOPE:RESOURCE<_AWS_EC2_NETWORKINSIGHTSACCESSSCOPE> = (resource) => {return {Type: "AWS::EC2::NetworkInsightsAccessScope", ...resource}}
export const AWS_EC2_NETWORKINSIGHTSACCESSSCOPEANALYSIS:RESOURCE<_AWS_EC2_NETWORKINSIGHTSACCESSSCOPEANALYSIS> = (resource) => {return {Type: "AWS::EC2::NetworkInsightsAccessScopeAnalysis", ...resource}}
export const AWS_EC2_NETWORKINSIGHTSANALYSIS:RESOURCE<_AWS_EC2_NETWORKINSIGHTSANALYSIS> = (resource) => {return {Type: "AWS::EC2::NetworkInsightsAnalysis", ...resource}}
export const AWS_EC2_NETWORKINSIGHTSPATH:RESOURCE<_AWS_EC2_NETWORKINSIGHTSPATH> = (resource) => {return {Type: "AWS::EC2::NetworkInsightsPath", ...resource}}
export const AWS_EC2_NETWORKINTERFACE:RESOURCE<_AWS_EC2_NETWORKINTERFACE> = (resource) => {return {Type: "AWS::EC2::NetworkInterface", ...resource}}
export const AWS_EC2_NETWORKINTERFACEATTACHMENT:RESOURCE<_AWS_EC2_NETWORKINTERFACEATTACHMENT> = (resource) => {return {Type: "AWS::EC2::NetworkInterfaceAttachment", ...resource}}
export const AWS_EC2_NETWORKINTERFACEPERMISSION:RESOURCE<_AWS_EC2_NETWORKINTERFACEPERMISSION> = (resource) => {return {Type: "AWS::EC2::NetworkInterfacePermission", ...resource}}
export const AWS_EC2_NETWORKPERFORMANCEMETRICSUBSCRIPTION:RESOURCE<_AWS_EC2_NETWORKPERFORMANCEMETRICSUBSCRIPTION> = (resource) => {return {Type: "AWS::EC2::NetworkPerformanceMetricSubscription", ...resource}}
export const AWS_EC2_PLACEMENTGROUP:RESOURCE<_AWS_EC2_PLACEMENTGROUP> = (resource) => {return {Type: "AWS::EC2::PlacementGroup", ...resource}}
export const AWS_EC2_PREFIXLIST:RESOURCE<_AWS_EC2_PREFIXLIST> = (resource) => {return {Type: "AWS::EC2::PrefixList", ...resource}}
export const AWS_EC2_ROUTE:RESOURCE<_AWS_EC2_ROUTE> = (resource) => {return {Type: "AWS::EC2::Route", ...resource}}
export const AWS_EC2_ROUTETABLE:RESOURCE<_AWS_EC2_ROUTETABLE> = (resource) => {return {Type: "AWS::EC2::RouteTable", ...resource}}
export const AWS_EC2_SECURITYGROUP:RESOURCE<_AWS_EC2_SECURITYGROUP> = (resource) => {return {Type: "AWS::EC2::SecurityGroup", ...resource}}
export const AWS_EC2_SECURITYGROUPEGRESS:RESOURCE<_AWS_EC2_SECURITYGROUPEGRESS> = (resource) => {return {Type: "AWS::EC2::SecurityGroupEgress", ...resource}}
export const AWS_EC2_SECURITYGROUPINGRESS:RESOURCE<_AWS_EC2_SECURITYGROUPINGRESS> = (resource) => {return {Type: "AWS::EC2::SecurityGroupIngress", ...resource}}
export const AWS_EC2_SNAPSHOTBLOCKPUBLICACCESS:RESOURCE<_AWS_EC2_SNAPSHOTBLOCKPUBLICACCESS> = (resource) => {return {Type: "AWS::EC2::SnapshotBlockPublicAccess", ...resource}}
export const AWS_EC2_SPOTFLEET:RESOURCE<_AWS_EC2_SPOTFLEET> = (resource) => {return {Type: "AWS::EC2::SpotFleet", ...resource}}
export const AWS_EC2_SUBNET:RESOURCE<_AWS_EC2_SUBNET> = (resource) => {return {Type: "AWS::EC2::Subnet", ...resource}}
export const AWS_EC2_SUBNETCIDRBLOCK:RESOURCE<_AWS_EC2_SUBNETCIDRBLOCK> = (resource) => {return {Type: "AWS::EC2::SubnetCidrBlock", ...resource}}
export const AWS_EC2_SUBNETNETWORKACLASSOCIATION:RESOURCE<_AWS_EC2_SUBNETNETWORKACLASSOCIATION> = (resource) => {return {Type: "AWS::EC2::SubnetNetworkAclAssociation", ...resource}}
export const AWS_EC2_SUBNETROUTETABLEASSOCIATION:RESOURCE<_AWS_EC2_SUBNETROUTETABLEASSOCIATION> = (resource) => {return {Type: "AWS::EC2::SubnetRouteTableAssociation", ...resource}}
export const AWS_EC2_TRAFFICMIRRORFILTER:RESOURCE<_AWS_EC2_TRAFFICMIRRORFILTER> = (resource) => {return {Type: "AWS::EC2::TrafficMirrorFilter", ...resource}}
export const AWS_EC2_TRAFFICMIRRORFILTERRULE:RESOURCE<_AWS_EC2_TRAFFICMIRRORFILTERRULE> = (resource) => {return {Type: "AWS::EC2::TrafficMirrorFilterRule", ...resource}}
export const AWS_EC2_TRAFFICMIRRORSESSION:RESOURCE<_AWS_EC2_TRAFFICMIRRORSESSION> = (resource) => {return {Type: "AWS::EC2::TrafficMirrorSession", ...resource}}
export const AWS_EC2_TRAFFICMIRRORTARGET:RESOURCE<_AWS_EC2_TRAFFICMIRRORTARGET> = (resource) => {return {Type: "AWS::EC2::TrafficMirrorTarget", ...resource}}
export const AWS_EC2_TRANSITGATEWAY:RESOURCE<_AWS_EC2_TRANSITGATEWAY> = (resource) => {return {Type: "AWS::EC2::TransitGateway", ...resource}}
export const AWS_EC2_TRANSITGATEWAYATTACHMENT:RESOURCE<_AWS_EC2_TRANSITGATEWAYATTACHMENT> = (resource) => {return {Type: "AWS::EC2::TransitGatewayAttachment", ...resource}}
export const AWS_EC2_TRANSITGATEWAYCONNECT:RESOURCE<_AWS_EC2_TRANSITGATEWAYCONNECT> = (resource) => {return {Type: "AWS::EC2::TransitGatewayConnect", ...resource}}
export const AWS_EC2_TRANSITGATEWAYMULTICASTDOMAIN:RESOURCE<_AWS_EC2_TRANSITGATEWAYMULTICASTDOMAIN> = (resource) => {return {Type: "AWS::EC2::TransitGatewayMulticastDomain", ...resource}}
export const AWS_EC2_TRANSITGATEWAYMULTICASTDOMAINASSOCIATION:RESOURCE<_AWS_EC2_TRANSITGATEWAYMULTICASTDOMAINASSOCIATION> = (resource) => {return {Type: "AWS::EC2::TransitGatewayMulticastDomainAssociation", ...resource}}
export const AWS_EC2_TRANSITGATEWAYMULTICASTGROUPMEMBER:RESOURCE<_AWS_EC2_TRANSITGATEWAYMULTICASTGROUPMEMBER> = (resource) => {return {Type: "AWS::EC2::TransitGatewayMulticastGroupMember", ...resource}}
export const AWS_EC2_TRANSITGATEWAYMULTICASTGROUPSOURCE:RESOURCE<_AWS_EC2_TRANSITGATEWAYMULTICASTGROUPSOURCE> = (resource) => {return {Type: "AWS::EC2::TransitGatewayMulticastGroupSource", ...resource}}
export const AWS_EC2_TRANSITGATEWAYPEERINGATTACHMENT:RESOURCE<_AWS_EC2_TRANSITGATEWAYPEERINGATTACHMENT> = (resource) => {return {Type: "AWS::EC2::TransitGatewayPeeringAttachment", ...resource}}
export const AWS_EC2_TRANSITGATEWAYROUTE:RESOURCE<_AWS_EC2_TRANSITGATEWAYROUTE> = (resource) => {return {Type: "AWS::EC2::TransitGatewayRoute", ...resource}}
export const AWS_EC2_TRANSITGATEWAYROUTETABLE:RESOURCE<_AWS_EC2_TRANSITGATEWAYROUTETABLE> = (resource) => {return {Type: "AWS::EC2::TransitGatewayRouteTable", ...resource}}
export const AWS_EC2_TRANSITGATEWAYROUTETABLEASSOCIATION:RESOURCE<_AWS_EC2_TRANSITGATEWAYROUTETABLEASSOCIATION> = (resource) => {return {Type: "AWS::EC2::TransitGatewayRouteTableAssociation", ...resource}}
export const AWS_EC2_TRANSITGATEWAYROUTETABLEPROPAGATION:RESOURCE<_AWS_EC2_TRANSITGATEWAYROUTETABLEPROPAGATION> = (resource) => {return {Type: "AWS::EC2::TransitGatewayRouteTablePropagation", ...resource}}
export const AWS_EC2_TRANSITGATEWAYVPCATTACHMENT:RESOURCE<_AWS_EC2_TRANSITGATEWAYVPCATTACHMENT> = (resource) => {return {Type: "AWS::EC2::TransitGatewayVpcAttachment", ...resource}}
export const AWS_EC2_VERIFIEDACCESSENDPOINT:RESOURCE<_AWS_EC2_VERIFIEDACCESSENDPOINT> = (resource) => {return {Type: "AWS::EC2::VerifiedAccessEndpoint", ...resource}}
export const AWS_EC2_VERIFIEDACCESSGROUP:RESOURCE<_AWS_EC2_VERIFIEDACCESSGROUP> = (resource) => {return {Type: "AWS::EC2::VerifiedAccessGroup", ...resource}}
export const AWS_EC2_VERIFIEDACCESSINSTANCE:RESOURCE<_AWS_EC2_VERIFIEDACCESSINSTANCE> = (resource) => {return {Type: "AWS::EC2::VerifiedAccessInstance", ...resource}}
export const AWS_EC2_VOLUME:RESOURCE<_AWS_EC2_VOLUME> = (resource) => {return {Type: "AWS::EC2::Volume", ...resource}}
export const AWS_EC2_VOLUMEATTACHMENT:RESOURCE<_AWS_EC2_VOLUMEATTACHMENT> = (resource) => {return {Type: "AWS::EC2::VolumeAttachment", ...resource}}
export const AWS_EC2_VPC:RESOURCE<_AWS_EC2_VPC> = (resource) => {return {Type: "AWS::EC2::VPC", ...resource}}
export const AWS_EC2_VPCCIDRBLOCK:RESOURCE<_AWS_EC2_VPCCIDRBLOCK> = (resource) => {return {Type: "AWS::EC2::VPCCidrBlock", ...resource}}
export const AWS_EC2_VPCDHCPOPTIONSASSOCIATION:RESOURCE<_AWS_EC2_VPCDHCPOPTIONSASSOCIATION> = (resource) => {return {Type: "AWS::EC2::VPCDHCPOptionsAssociation", ...resource}}
export const AWS_EC2_VPCENDPOINT:RESOURCE<_AWS_EC2_VPCENDPOINT> = (resource) => {return {Type: "AWS::EC2::VPCEndpoint", ...resource}}
export const AWS_EC2_VPCENDPOINTCONNECTIONNOTIFICATION:RESOURCE<_AWS_EC2_VPCENDPOINTCONNECTIONNOTIFICATION> = (resource) => {return {Type: "AWS::EC2::VPCEndpointConnectionNotification", ...resource}}
export const AWS_EC2_VPCENDPOINTSERVICE:RESOURCE<_AWS_EC2_VPCENDPOINTSERVICE> = (resource) => {return {Type: "AWS::EC2::VPCEndpointService", ...resource}}
export const AWS_EC2_VPCENDPOINTSERVICEPERMISSIONS:RESOURCE<_AWS_EC2_VPCENDPOINTSERVICEPERMISSIONS> = (resource) => {return {Type: "AWS::EC2::VPCEndpointServicePermissions", ...resource}}
export const AWS_EC2_VPCGATEWAYATTACHMENT:RESOURCE<_AWS_EC2_VPCGATEWAYATTACHMENT> = (resource) => {return {Type: "AWS::EC2::VPCGatewayAttachment", ...resource}}
export const AWS_EC2_VPCPEERINGCONNECTION:RESOURCE<_AWS_EC2_VPCPEERINGCONNECTION> = (resource) => {return {Type: "AWS::EC2::VPCPeeringConnection", ...resource}}
export const AWS_EC2_VPNCONNECTION:RESOURCE<_AWS_EC2_VPNCONNECTION> = (resource) => {return {Type: "AWS::EC2::VPNConnection", ...resource}}
export const AWS_EC2_VPNCONNECTIONROUTE:RESOURCE<_AWS_EC2_VPNCONNECTIONROUTE> = (resource) => {return {Type: "AWS::EC2::VPNConnectionRoute", ...resource}}
export const AWS_EC2_VPNGATEWAY:RESOURCE<_AWS_EC2_VPNGATEWAY> = (resource) => {return {Type: "AWS::EC2::VPNGateway", ...resource}}
export const AWS_EC2_VPNGATEWAYROUTEPROPAGATION:RESOURCE<_AWS_EC2_VPNGATEWAYROUTEPROPAGATION> = (resource) => {return {Type: "AWS::EC2::VPNGatewayRoutePropagation", ...resource}}
export const AWS_ECR_PUBLICREPOSITORY:RESOURCE<_AWS_ECR_PUBLICREPOSITORY> = (resource) => {return {Type: "AWS::ECR::PublicRepository", ...resource}}
export const AWS_ECR_PULLTHROUGHCACHERULE:RESOURCE<_AWS_ECR_PULLTHROUGHCACHERULE> = (resource) => {return {Type: "AWS::ECR::PullThroughCacheRule", ...resource}}
export const AWS_ECR_REGISTRYPOLICY:RESOURCE<_AWS_ECR_REGISTRYPOLICY> = (resource) => {return {Type: "AWS::ECR::RegistryPolicy", ...resource}}
export const AWS_ECR_REPLICATIONCONFIGURATION:RESOURCE<_AWS_ECR_REPLICATIONCONFIGURATION> = (resource) => {return {Type: "AWS::ECR::ReplicationConfiguration", ...resource}}
export const AWS_ECR_REPOSITORY:RESOURCE<_AWS_ECR_REPOSITORY> = (resource) => {return {Type: "AWS::ECR::Repository", ...resource}}
export const AWS_ECR_REPOSITORYCREATIONTEMPLATE:RESOURCE<_AWS_ECR_REPOSITORYCREATIONTEMPLATE> = (resource) => {return {Type: "AWS::ECR::RepositoryCreationTemplate", ...resource}}
export const AWS_ECS_CAPACITYPROVIDER:RESOURCE<_AWS_ECS_CAPACITYPROVIDER> = (resource) => {return {Type: "AWS::ECS::CapacityProvider", ...resource}}
export const AWS_ECS_CLUSTER:RESOURCE<_AWS_ECS_CLUSTER> = (resource) => {return {Type: "AWS::ECS::Cluster", ...resource}}
export const AWS_ECS_CLUSTERCAPACITYPROVIDERASSOCIATIONS:RESOURCE<_AWS_ECS_CLUSTERCAPACITYPROVIDERASSOCIATIONS> = (resource) => {return {Type: "AWS::ECS::ClusterCapacityProviderAssociations", ...resource}}
export const AWS_ECS_PRIMARYTASKSET:RESOURCE<_AWS_ECS_PRIMARYTASKSET> = (resource) => {return {Type: "AWS::ECS::PrimaryTaskSet", ...resource}}
export const AWS_ECS_SERVICE:RESOURCE<_AWS_ECS_SERVICE> = (resource) => {return {Type: "AWS::ECS::Service", ...resource}}
export const AWS_ECS_TASKDEFINITION:RESOURCE<_AWS_ECS_TASKDEFINITION> = (resource) => {return {Type: "AWS::ECS::TaskDefinition", ...resource}}
export const AWS_ECS_TASKSET:RESOURCE<_AWS_ECS_TASKSET> = (resource) => {return {Type: "AWS::ECS::TaskSet", ...resource}}
export const AWS_EFS_ACCESSPOINT:RESOURCE<_AWS_EFS_ACCESSPOINT> = (resource) => {return {Type: "AWS::EFS::AccessPoint", ...resource}}
export const AWS_EFS_FILESYSTEM:RESOURCE<_AWS_EFS_FILESYSTEM> = (resource) => {return {Type: "AWS::EFS::FileSystem", ...resource}}
export const AWS_EFS_MOUNTTARGET:RESOURCE<_AWS_EFS_MOUNTTARGET> = (resource) => {return {Type: "AWS::EFS::MountTarget", ...resource}}
export const AWS_EKS_ACCESSENTRY:RESOURCE<_AWS_EKS_ACCESSENTRY> = (resource) => {return {Type: "AWS::EKS::AccessEntry", ...resource}}
export const AWS_EKS_ADDON:RESOURCE<_AWS_EKS_ADDON> = (resource) => {return {Type: "AWS::EKS::Addon", ...resource}}
export const AWS_EKS_CLUSTER:RESOURCE<_AWS_EKS_CLUSTER> = (resource) => {return {Type: "AWS::EKS::Cluster", ...resource}}
export const AWS_EKS_FARGATEPROFILE:RESOURCE<_AWS_EKS_FARGATEPROFILE> = (resource) => {return {Type: "AWS::EKS::FargateProfile", ...resource}}
export const AWS_EKS_IDENTITYPROVIDERCONFIG:RESOURCE<_AWS_EKS_IDENTITYPROVIDERCONFIG> = (resource) => {return {Type: "AWS::EKS::IdentityProviderConfig", ...resource}}
export const AWS_EKS_NODEGROUP:RESOURCE<_AWS_EKS_NODEGROUP> = (resource) => {return {Type: "AWS::EKS::Nodegroup", ...resource}}
export const AWS_EKS_PODIDENTITYASSOCIATION:RESOURCE<_AWS_EKS_PODIDENTITYASSOCIATION> = (resource) => {return {Type: "AWS::EKS::PodIdentityAssociation", ...resource}}
export const AWS_ELASTICACHE_CACHECLUSTER:RESOURCE<_AWS_ELASTICACHE_CACHECLUSTER> = (resource) => {return {Type: "AWS::ElastiCache::CacheCluster", ...resource}}
export const AWS_ELASTICACHE_GLOBALREPLICATIONGROUP:RESOURCE<_AWS_ELASTICACHE_GLOBALREPLICATIONGROUP> = (resource) => {return {Type: "AWS::ElastiCache::GlobalReplicationGroup", ...resource}}
export const AWS_ELASTICACHE_PARAMETERGROUP:RESOURCE<_AWS_ELASTICACHE_PARAMETERGROUP> = (resource) => {return {Type: "AWS::ElastiCache::ParameterGroup", ...resource}}
export const AWS_ELASTICACHE_REPLICATIONGROUP:RESOURCE<_AWS_ELASTICACHE_REPLICATIONGROUP> = (resource) => {return {Type: "AWS::ElastiCache::ReplicationGroup", ...resource}}
export const AWS_ELASTICACHE_SECURITYGROUP:RESOURCE<_AWS_ELASTICACHE_SECURITYGROUP> = (resource) => {return {Type: "AWS::ElastiCache::SecurityGroup", ...resource}}
export const AWS_ELASTICACHE_SECURITYGROUPINGRESS:RESOURCE<_AWS_ELASTICACHE_SECURITYGROUPINGRESS> = (resource) => {return {Type: "AWS::ElastiCache::SecurityGroupIngress", ...resource}}
export const AWS_ELASTICACHE_SERVERLESSCACHE:RESOURCE<_AWS_ELASTICACHE_SERVERLESSCACHE> = (resource) => {return {Type: "AWS::ElastiCache::ServerlessCache", ...resource}}
export const AWS_ELASTICACHE_SUBNETGROUP:RESOURCE<_AWS_ELASTICACHE_SUBNETGROUP> = (resource) => {return {Type: "AWS::ElastiCache::SubnetGroup", ...resource}}
export const AWS_ELASTICACHE_USER:RESOURCE<_AWS_ELASTICACHE_USER> = (resource) => {return {Type: "AWS::ElastiCache::User", ...resource}}
export const AWS_ELASTICACHE_USERGROUP:RESOURCE<_AWS_ELASTICACHE_USERGROUP> = (resource) => {return {Type: "AWS::ElastiCache::UserGroup", ...resource}}
export const AWS_ELASTICBEANSTALK_APPLICATION:RESOURCE<_AWS_ELASTICBEANSTALK_APPLICATION> = (resource) => {return {Type: "AWS::ElasticBeanstalk::Application", ...resource}}
export const AWS_ELASTICBEANSTALK_APPLICATIONVERSION:RESOURCE<_AWS_ELASTICBEANSTALK_APPLICATIONVERSION> = (resource) => {return {Type: "AWS::ElasticBeanstalk::ApplicationVersion", ...resource}}
export const AWS_ELASTICBEANSTALK_CONFIGURATIONTEMPLATE:RESOURCE<_AWS_ELASTICBEANSTALK_CONFIGURATIONTEMPLATE> = (resource) => {return {Type: "AWS::ElasticBeanstalk::ConfigurationTemplate", ...resource}}
export const AWS_ELASTICBEANSTALK_ENVIRONMENT:RESOURCE<_AWS_ELASTICBEANSTALK_ENVIRONMENT> = (resource) => {return {Type: "AWS::ElasticBeanstalk::Environment", ...resource}}
export const AWS_ELASTICLOADBALANCING_LOADBALANCER:RESOURCE<_AWS_ELASTICLOADBALANCING_LOADBALANCER> = (resource) => {return {Type: "AWS::ElasticLoadBalancing::LoadBalancer", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_LISTENER:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_LISTENER> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::Listener", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_LISTENERCERTIFICATE:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_LISTENERCERTIFICATE> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::ListenerCertificate", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_LISTENERRULE:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_LISTENERRULE> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::ListenerRule", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_LOADBALANCER:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_LOADBALANCER> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::LoadBalancer", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_TARGETGROUP:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_TARGETGROUP> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::TargetGroup", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_TRUSTSTORE:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_TRUSTSTORE> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::TrustStore", ...resource}}
export const AWS_ELASTICLOADBALANCINGV2_TRUSTSTOREREVOCATION:RESOURCE<_AWS_ELASTICLOADBALANCINGV2_TRUSTSTOREREVOCATION> = (resource) => {return {Type: "AWS::ElasticLoadBalancingV2::TrustStoreRevocation", ...resource}}
export const AWS_ELASTICSEARCH_DOMAIN:RESOURCE<_AWS_ELASTICSEARCH_DOMAIN> = (resource) => {return {Type: "AWS::Elasticsearch::Domain", ...resource}}
export const AWS_EMR_CLUSTER:RESOURCE<_AWS_EMR_CLUSTER> = (resource) => {return {Type: "AWS::EMR::Cluster", ...resource}}
export const AWS_EMR_INSTANCEFLEETCONFIG:RESOURCE<_AWS_EMR_INSTANCEFLEETCONFIG> = (resource) => {return {Type: "AWS::EMR::InstanceFleetConfig", ...resource}}
export const AWS_EMR_INSTANCEGROUPCONFIG:RESOURCE<_AWS_EMR_INSTANCEGROUPCONFIG> = (resource) => {return {Type: "AWS::EMR::InstanceGroupConfig", ...resource}}
export const AWS_EMR_SECURITYCONFIGURATION:RESOURCE<_AWS_EMR_SECURITYCONFIGURATION> = (resource) => {return {Type: "AWS::EMR::SecurityConfiguration", ...resource}}
export const AWS_EMR_STEP:RESOURCE<_AWS_EMR_STEP> = (resource) => {return {Type: "AWS::EMR::Step", ...resource}}
export const AWS_EMR_STUDIO:RESOURCE<_AWS_EMR_STUDIO> = (resource) => {return {Type: "AWS::EMR::Studio", ...resource}}
export const AWS_EMR_STUDIOSESSIONMAPPING:RESOURCE<_AWS_EMR_STUDIOSESSIONMAPPING> = (resource) => {return {Type: "AWS::EMR::StudioSessionMapping", ...resource}}
export const AWS_EMR_WALWORKSPACE:RESOURCE<_AWS_EMR_WALWORKSPACE> = (resource) => {return {Type: "AWS::EMR::WALWorkspace", ...resource}}
export const AWS_EMRCONTAINERS_VIRTUALCLUSTER:RESOURCE<_AWS_EMRCONTAINERS_VIRTUALCLUSTER> = (resource) => {return {Type: "AWS::EMRContainers::VirtualCluster", ...resource}}
export const AWS_EMRSERVERLESS_APPLICATION:RESOURCE<_AWS_EMRSERVERLESS_APPLICATION> = (resource) => {return {Type: "AWS::EMRServerless::Application", ...resource}}
export const AWS_ENTITYRESOLUTION_IDMAPPINGWORKFLOW:RESOURCE<_AWS_ENTITYRESOLUTION_IDMAPPINGWORKFLOW> = (resource) => {return {Type: "AWS::EntityResolution::IdMappingWorkflow", ...resource}}
export const AWS_ENTITYRESOLUTION_IDNAMESPACE:RESOURCE<_AWS_ENTITYRESOLUTION_IDNAMESPACE> = (resource) => {return {Type: "AWS::EntityResolution::IdNamespace", ...resource}}
export const AWS_ENTITYRESOLUTION_MATCHINGWORKFLOW:RESOURCE<_AWS_ENTITYRESOLUTION_MATCHINGWORKFLOW> = (resource) => {return {Type: "AWS::EntityResolution::MatchingWorkflow", ...resource}}
export const AWS_ENTITYRESOLUTION_POLICYSTATEMENT:RESOURCE<_AWS_ENTITYRESOLUTION_POLICYSTATEMENT> = (resource) => {return {Type: "AWS::EntityResolution::PolicyStatement", ...resource}}
export const AWS_ENTITYRESOLUTION_SCHEMAMAPPING:RESOURCE<_AWS_ENTITYRESOLUTION_SCHEMAMAPPING> = (resource) => {return {Type: "AWS::EntityResolution::SchemaMapping", ...resource}}
export const AWS_EVENTS_APIDESTINATION:RESOURCE<_AWS_EVENTS_APIDESTINATION> = (resource) => {return {Type: "AWS::Events::ApiDestination", ...resource}}
export const AWS_EVENTS_ARCHIVE:RESOURCE<_AWS_EVENTS_ARCHIVE> = (resource) => {return {Type: "AWS::Events::Archive", ...resource}}
export const AWS_EVENTS_CONNECTION:RESOURCE<_AWS_EVENTS_CONNECTION> = (resource) => {return {Type: "AWS::Events::Connection", ...resource}}
export const AWS_EVENTS_ENDPOINT:RESOURCE<_AWS_EVENTS_ENDPOINT> = (resource) => {return {Type: "AWS::Events::Endpoint", ...resource}}
export const AWS_EVENTS_EVENTBUS:RESOURCE<_AWS_EVENTS_EVENTBUS> = (resource) => {return {Type: "AWS::Events::EventBus", ...resource}}
export const AWS_EVENTS_EVENTBUSPOLICY:RESOURCE<_AWS_EVENTS_EVENTBUSPOLICY> = (resource) => {return {Type: "AWS::Events::EventBusPolicy", ...resource}}
export const AWS_EVENTS_RULE:RESOURCE<_AWS_EVENTS_RULE> = (resource) => {return {Type: "AWS::Events::Rule", ...resource}}
export const AWS_EVENTSCHEMAS_DISCOVERER:RESOURCE<_AWS_EVENTSCHEMAS_DISCOVERER> = (resource) => {return {Type: "AWS::EventSchemas::Discoverer", ...resource}}
export const AWS_EVENTSCHEMAS_REGISTRY:RESOURCE<_AWS_EVENTSCHEMAS_REGISTRY> = (resource) => {return {Type: "AWS::EventSchemas::Registry", ...resource}}
export const AWS_EVENTSCHEMAS_REGISTRYPOLICY:RESOURCE<_AWS_EVENTSCHEMAS_REGISTRYPOLICY> = (resource) => {return {Type: "AWS::EventSchemas::RegistryPolicy", ...resource}}
export const AWS_EVENTSCHEMAS_SCHEMA:RESOURCE<_AWS_EVENTSCHEMAS_SCHEMA> = (resource) => {return {Type: "AWS::EventSchemas::Schema", ...resource}}
export const AWS_EVIDENTLY_EXPERIMENT:RESOURCE<_AWS_EVIDENTLY_EXPERIMENT> = (resource) => {return {Type: "AWS::Evidently::Experiment", ...resource}}
export const AWS_EVIDENTLY_FEATURE:RESOURCE<_AWS_EVIDENTLY_FEATURE> = (resource) => {return {Type: "AWS::Evidently::Feature", ...resource}}
export const AWS_EVIDENTLY_LAUNCH:RESOURCE<_AWS_EVIDENTLY_LAUNCH> = (resource) => {return {Type: "AWS::Evidently::Launch", ...resource}}
export const AWS_EVIDENTLY_PROJECT:RESOURCE<_AWS_EVIDENTLY_PROJECT> = (resource) => {return {Type: "AWS::Evidently::Project", ...resource}}
export const AWS_EVIDENTLY_SEGMENT:RESOURCE<_AWS_EVIDENTLY_SEGMENT> = (resource) => {return {Type: "AWS::Evidently::Segment", ...resource}}
export const AWS_FINSPACE_ENVIRONMENT:RESOURCE<_AWS_FINSPACE_ENVIRONMENT> = (resource) => {return {Type: "AWS::FinSpace::Environment", ...resource}}
export const AWS_FIS_EXPERIMENTTEMPLATE:RESOURCE<_AWS_FIS_EXPERIMENTTEMPLATE> = (resource) => {return {Type: "AWS::FIS::ExperimentTemplate", ...resource}}
export const AWS_FIS_TARGETACCOUNTCONFIGURATION:RESOURCE<_AWS_FIS_TARGETACCOUNTCONFIGURATION> = (resource) => {return {Type: "AWS::FIS::TargetAccountConfiguration", ...resource}}
export const AWS_FMS_NOTIFICATIONCHANNEL:RESOURCE<_AWS_FMS_NOTIFICATIONCHANNEL> = (resource) => {return {Type: "AWS::FMS::NotificationChannel", ...resource}}
export const AWS_FMS_POLICY:RESOURCE<_AWS_FMS_POLICY> = (resource) => {return {Type: "AWS::FMS::Policy", ...resource}}
export const AWS_FMS_RESOURCESET:RESOURCE<_AWS_FMS_RESOURCESET> = (resource) => {return {Type: "AWS::FMS::ResourceSet", ...resource}}
export const AWS_FORECAST_DATASET:RESOURCE<_AWS_FORECAST_DATASET> = (resource) => {return {Type: "AWS::Forecast::Dataset", ...resource}}
export const AWS_FORECAST_DATASETGROUP:RESOURCE<_AWS_FORECAST_DATASETGROUP> = (resource) => {return {Type: "AWS::Forecast::DatasetGroup", ...resource}}
export const AWS_FRAUDDETECTOR_DETECTOR:RESOURCE<_AWS_FRAUDDETECTOR_DETECTOR> = (resource) => {return {Type: "AWS::FraudDetector::Detector", ...resource}}
export const AWS_FRAUDDETECTOR_ENTITYTYPE:RESOURCE<_AWS_FRAUDDETECTOR_ENTITYTYPE> = (resource) => {return {Type: "AWS::FraudDetector::EntityType", ...resource}}
export const AWS_FRAUDDETECTOR_EVENTTYPE:RESOURCE<_AWS_FRAUDDETECTOR_EVENTTYPE> = (resource) => {return {Type: "AWS::FraudDetector::EventType", ...resource}}
export const AWS_FRAUDDETECTOR_LABEL:RESOURCE<_AWS_FRAUDDETECTOR_LABEL> = (resource) => {return {Type: "AWS::FraudDetector::Label", ...resource}}
export const AWS_FRAUDDETECTOR_LIST:RESOURCE<_AWS_FRAUDDETECTOR_LIST> = (resource) => {return {Type: "AWS::FraudDetector::List", ...resource}}
export const AWS_FRAUDDETECTOR_OUTCOME:RESOURCE<_AWS_FRAUDDETECTOR_OUTCOME> = (resource) => {return {Type: "AWS::FraudDetector::Outcome", ...resource}}
export const AWS_FRAUDDETECTOR_VARIABLE:RESOURCE<_AWS_FRAUDDETECTOR_VARIABLE> = (resource) => {return {Type: "AWS::FraudDetector::Variable", ...resource}}
export const AWS_FSX_DATAREPOSITORYASSOCIATION:RESOURCE<_AWS_FSX_DATAREPOSITORYASSOCIATION> = (resource) => {return {Type: "AWS::FSx::DataRepositoryAssociation", ...resource}}
export const AWS_FSX_FILESYSTEM:RESOURCE<_AWS_FSX_FILESYSTEM> = (resource) => {return {Type: "AWS::FSx::FileSystem", ...resource}}
export const AWS_FSX_SNAPSHOT:RESOURCE<_AWS_FSX_SNAPSHOT> = (resource) => {return {Type: "AWS::FSx::Snapshot", ...resource}}
export const AWS_FSX_STORAGEVIRTUALMACHINE:RESOURCE<_AWS_FSX_STORAGEVIRTUALMACHINE> = (resource) => {return {Type: "AWS::FSx::StorageVirtualMachine", ...resource}}
export const AWS_FSX_VOLUME:RESOURCE<_AWS_FSX_VOLUME> = (resource) => {return {Type: "AWS::FSx::Volume", ...resource}}
export const AWS_GAMELIFT_ALIAS:RESOURCE<_AWS_GAMELIFT_ALIAS> = (resource) => {return {Type: "AWS::GameLift::Alias", ...resource}}
export const AWS_GAMELIFT_BUILD:RESOURCE<_AWS_GAMELIFT_BUILD> = (resource) => {return {Type: "AWS::GameLift::Build", ...resource}}
export const AWS_GAMELIFT_CONTAINERGROUPDEFINITION:RESOURCE<_AWS_GAMELIFT_CONTAINERGROUPDEFINITION> = (resource) => {return {Type: "AWS::GameLift::ContainerGroupDefinition", ...resource}}
export const AWS_GAMELIFT_FLEET:RESOURCE<_AWS_GAMELIFT_FLEET> = (resource) => {return {Type: "AWS::GameLift::Fleet", ...resource}}
export const AWS_GAMELIFT_GAMESERVERGROUP:RESOURCE<_AWS_GAMELIFT_GAMESERVERGROUP> = (resource) => {return {Type: "AWS::GameLift::GameServerGroup", ...resource}}
export const AWS_GAMELIFT_GAMESESSIONQUEUE:RESOURCE<_AWS_GAMELIFT_GAMESESSIONQUEUE> = (resource) => {return {Type: "AWS::GameLift::GameSessionQueue", ...resource}}
export const AWS_GAMELIFT_LOCATION:RESOURCE<_AWS_GAMELIFT_LOCATION> = (resource) => {return {Type: "AWS::GameLift::Location", ...resource}}
export const AWS_GAMELIFT_MATCHMAKINGCONFIGURATION:RESOURCE<_AWS_GAMELIFT_MATCHMAKINGCONFIGURATION> = (resource) => {return {Type: "AWS::GameLift::MatchmakingConfiguration", ...resource}}
export const AWS_GAMELIFT_MATCHMAKINGRULESET:RESOURCE<_AWS_GAMELIFT_MATCHMAKINGRULESET> = (resource) => {return {Type: "AWS::GameLift::MatchmakingRuleSet", ...resource}}
export const AWS_GAMELIFT_SCRIPT:RESOURCE<_AWS_GAMELIFT_SCRIPT> = (resource) => {return {Type: "AWS::GameLift::Script", ...resource}}
export const AWS_GLOBALACCELERATOR_ACCELERATOR:RESOURCE<_AWS_GLOBALACCELERATOR_ACCELERATOR> = (resource) => {return {Type: "AWS::GlobalAccelerator::Accelerator", ...resource}}
export const AWS_GLOBALACCELERATOR_CROSSACCOUNTATTACHMENT:RESOURCE<_AWS_GLOBALACCELERATOR_CROSSACCOUNTATTACHMENT> = (resource) => {return {Type: "AWS::GlobalAccelerator::CrossAccountAttachment", ...resource}}
export const AWS_GLOBALACCELERATOR_ENDPOINTGROUP:RESOURCE<_AWS_GLOBALACCELERATOR_ENDPOINTGROUP> = (resource) => {return {Type: "AWS::GlobalAccelerator::EndpointGroup", ...resource}}
export const AWS_GLOBALACCELERATOR_LISTENER:RESOURCE<_AWS_GLOBALACCELERATOR_LISTENER> = (resource) => {return {Type: "AWS::GlobalAccelerator::Listener", ...resource}}
export const AWS_GLUE_CLASSIFIER:RESOURCE<_AWS_GLUE_CLASSIFIER> = (resource) => {return {Type: "AWS::Glue::Classifier", ...resource}}
export const AWS_GLUE_CONNECTION:RESOURCE<_AWS_GLUE_CONNECTION> = (resource) => {return {Type: "AWS::Glue::Connection", ...resource}}
export const AWS_GLUE_CRAWLER:RESOURCE<_AWS_GLUE_CRAWLER> = (resource) => {return {Type: "AWS::Glue::Crawler", ...resource}}
export const AWS_GLUE_CUSTOMENTITYTYPE:RESOURCE<_AWS_GLUE_CUSTOMENTITYTYPE> = (resource) => {return {Type: "AWS::Glue::CustomEntityType", ...resource}}
export const AWS_GLUE_DATABASE:RESOURCE<_AWS_GLUE_DATABASE> = (resource) => {return {Type: "AWS::Glue::Database", ...resource}}
export const AWS_GLUE_DATACATALOGENCRYPTIONSETTINGS:RESOURCE<_AWS_GLUE_DATACATALOGENCRYPTIONSETTINGS> = (resource) => {return {Type: "AWS::Glue::DataCatalogEncryptionSettings", ...resource}}
export const AWS_GLUE_DATAQUALITYRULESET:RESOURCE<_AWS_GLUE_DATAQUALITYRULESET> = (resource) => {return {Type: "AWS::Glue::DataQualityRuleset", ...resource}}
export const AWS_GLUE_DEVENDPOINT:RESOURCE<_AWS_GLUE_DEVENDPOINT> = (resource) => {return {Type: "AWS::Glue::DevEndpoint", ...resource}}
export const AWS_GLUE_JOB:RESOURCE<_AWS_GLUE_JOB> = (resource) => {return {Type: "AWS::Glue::Job", ...resource}}
export const AWS_GLUE_MLTRANSFORM:RESOURCE<_AWS_GLUE_MLTRANSFORM> = (resource) => {return {Type: "AWS::Glue::MLTransform", ...resource}}
export const AWS_GLUE_PARTITION:RESOURCE<_AWS_GLUE_PARTITION> = (resource) => {return {Type: "AWS::Glue::Partition", ...resource}}
export const AWS_GLUE_REGISTRY:RESOURCE<_AWS_GLUE_REGISTRY> = (resource) => {return {Type: "AWS::Glue::Registry", ...resource}}
export const AWS_GLUE_SCHEMA:RESOURCE<_AWS_GLUE_SCHEMA> = (resource) => {return {Type: "AWS::Glue::Schema", ...resource}}
export const AWS_GLUE_SCHEMAVERSION:RESOURCE<_AWS_GLUE_SCHEMAVERSION> = (resource) => {return {Type: "AWS::Glue::SchemaVersion", ...resource}}
export const AWS_GLUE_SCHEMAVERSIONMETADATA:RESOURCE<_AWS_GLUE_SCHEMAVERSIONMETADATA> = (resource) => {return {Type: "AWS::Glue::SchemaVersionMetadata", ...resource}}
export const AWS_GLUE_SECURITYCONFIGURATION:RESOURCE<_AWS_GLUE_SECURITYCONFIGURATION> = (resource) => {return {Type: "AWS::Glue::SecurityConfiguration", ...resource}}
export const AWS_GLUE_TABLE:RESOURCE<_AWS_GLUE_TABLE> = (resource) => {return {Type: "AWS::Glue::Table", ...resource}}
export const AWS_GLUE_TABLEOPTIMIZER:RESOURCE<_AWS_GLUE_TABLEOPTIMIZER> = (resource) => {return {Type: "AWS::Glue::TableOptimizer", ...resource}}
export const AWS_GLUE_TRIGGER:RESOURCE<_AWS_GLUE_TRIGGER> = (resource) => {return {Type: "AWS::Glue::Trigger", ...resource}}
export const AWS_GLUE_WORKFLOW:RESOURCE<_AWS_GLUE_WORKFLOW> = (resource) => {return {Type: "AWS::Glue::Workflow", ...resource}}
export const AWS_GRAFANA_WORKSPACE:RESOURCE<_AWS_GRAFANA_WORKSPACE> = (resource) => {return {Type: "AWS::Grafana::Workspace", ...resource}}
export const AWS_GREENGRASS_CONNECTORDEFINITION:RESOURCE<_AWS_GREENGRASS_CONNECTORDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::ConnectorDefinition", ...resource}}
export const AWS_GREENGRASS_CONNECTORDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_CONNECTORDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::ConnectorDefinitionVersion", ...resource}}
export const AWS_GREENGRASS_COREDEFINITION:RESOURCE<_AWS_GREENGRASS_COREDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::CoreDefinition", ...resource}}
export const AWS_GREENGRASS_COREDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_COREDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::CoreDefinitionVersion", ...resource}}
export const AWS_GREENGRASS_DEVICEDEFINITION:RESOURCE<_AWS_GREENGRASS_DEVICEDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::DeviceDefinition", ...resource}}
export const AWS_GREENGRASS_DEVICEDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_DEVICEDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::DeviceDefinitionVersion", ...resource}}
export const AWS_GREENGRASS_FUNCTIONDEFINITION:RESOURCE<_AWS_GREENGRASS_FUNCTIONDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::FunctionDefinition", ...resource}}
export const AWS_GREENGRASS_FUNCTIONDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_FUNCTIONDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::FunctionDefinitionVersion", ...resource}}
export const AWS_GREENGRASS_GROUP:RESOURCE<_AWS_GREENGRASS_GROUP> = (resource) => {return {Type: "AWS::Greengrass::Group", ...resource}}
export const AWS_GREENGRASS_GROUPVERSION:RESOURCE<_AWS_GREENGRASS_GROUPVERSION> = (resource) => {return {Type: "AWS::Greengrass::GroupVersion", ...resource}}
export const AWS_GREENGRASS_LOGGERDEFINITION:RESOURCE<_AWS_GREENGRASS_LOGGERDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::LoggerDefinition", ...resource}}
export const AWS_GREENGRASS_LOGGERDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_LOGGERDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::LoggerDefinitionVersion", ...resource}}
export const AWS_GREENGRASS_RESOURCEDEFINITION:RESOURCE<_AWS_GREENGRASS_RESOURCEDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::ResourceDefinition", ...resource}}
export const AWS_GREENGRASS_RESOURCEDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_RESOURCEDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::ResourceDefinitionVersion", ...resource}}
export const AWS_GREENGRASS_SUBSCRIPTIONDEFINITION:RESOURCE<_AWS_GREENGRASS_SUBSCRIPTIONDEFINITION> = (resource) => {return {Type: "AWS::Greengrass::SubscriptionDefinition", ...resource}}
export const AWS_GREENGRASS_SUBSCRIPTIONDEFINITIONVERSION:RESOURCE<_AWS_GREENGRASS_SUBSCRIPTIONDEFINITIONVERSION> = (resource) => {return {Type: "AWS::Greengrass::SubscriptionDefinitionVersion", ...resource}}
export const AWS_GREENGRASSV2_COMPONENTVERSION:RESOURCE<_AWS_GREENGRASSV2_COMPONENTVERSION> = (resource) => {return {Type: "AWS::GreengrassV2::ComponentVersion", ...resource}}
export const AWS_GREENGRASSV2_DEPLOYMENT:RESOURCE<_AWS_GREENGRASSV2_DEPLOYMENT> = (resource) => {return {Type: "AWS::GreengrassV2::Deployment", ...resource}}
export const AWS_GROUNDSTATION_CONFIG:RESOURCE<_AWS_GROUNDSTATION_CONFIG> = (resource) => {return {Type: "AWS::GroundStation::Config", ...resource}}
export const AWS_GROUNDSTATION_DATAFLOWENDPOINTGROUP:RESOURCE<_AWS_GROUNDSTATION_DATAFLOWENDPOINTGROUP> = (resource) => {return {Type: "AWS::GroundStation::DataflowEndpointGroup", ...resource}}
export const AWS_GROUNDSTATION_MISSIONPROFILE:RESOURCE<_AWS_GROUNDSTATION_MISSIONPROFILE> = (resource) => {return {Type: "AWS::GroundStation::MissionProfile", ...resource}}
export const AWS_GUARDDUTY_DETECTOR:RESOURCE<_AWS_GUARDDUTY_DETECTOR> = (resource) => {return {Type: "AWS::GuardDuty::Detector", ...resource}}
export const AWS_GUARDDUTY_FILTER:RESOURCE<_AWS_GUARDDUTY_FILTER> = (resource) => {return {Type: "AWS::GuardDuty::Filter", ...resource}}
export const AWS_GUARDDUTY_IPSET:RESOURCE<_AWS_GUARDDUTY_IPSET> = (resource) => {return {Type: "AWS::GuardDuty::IPSet", ...resource}}
export const AWS_GUARDDUTY_MALWAREPROTECTIONPLAN:RESOURCE<_AWS_GUARDDUTY_MALWAREPROTECTIONPLAN> = (resource) => {return {Type: "AWS::GuardDuty::MalwareProtectionPlan", ...resource}}
export const AWS_GUARDDUTY_MASTER:RESOURCE<_AWS_GUARDDUTY_MASTER> = (resource) => {return {Type: "AWS::GuardDuty::Master", ...resource}}
export const AWS_GUARDDUTY_MEMBER:RESOURCE<_AWS_GUARDDUTY_MEMBER> = (resource) => {return {Type: "AWS::GuardDuty::Member", ...resource}}
export const AWS_GUARDDUTY_THREATINTELSET:RESOURCE<_AWS_GUARDDUTY_THREATINTELSET> = (resource) => {return {Type: "AWS::GuardDuty::ThreatIntelSet", ...resource}}
export const AWS_HEALTHIMAGING_DATASTORE:RESOURCE<_AWS_HEALTHIMAGING_DATASTORE> = (resource) => {return {Type: "AWS::HealthImaging::Datastore", ...resource}}
export const AWS_HEALTHLAKE_FHIRDATASTORE:RESOURCE<_AWS_HEALTHLAKE_FHIRDATASTORE> = (resource) => {return {Type: "AWS::HealthLake::FHIRDatastore", ...resource}}
export const AWS_IAM_ACCESSKEY:RESOURCE<_AWS_IAM_ACCESSKEY> = (resource) => {return {Type: "AWS::IAM::AccessKey", ...resource}}
export const AWS_IAM_GROUP:RESOURCE<_AWS_IAM_GROUP> = (resource) => {return {Type: "AWS::IAM::Group", ...resource}}
export const AWS_IAM_GROUPPOLICY:RESOURCE<_AWS_IAM_GROUPPOLICY> = (resource) => {return {Type: "AWS::IAM::GroupPolicy", ...resource}}
export const AWS_IAM_INSTANCEPROFILE:RESOURCE<_AWS_IAM_INSTANCEPROFILE> = (resource) => {return {Type: "AWS::IAM::InstanceProfile", ...resource}}
export const AWS_IAM_MANAGEDPOLICY:RESOURCE<_AWS_IAM_MANAGEDPOLICY> = (resource) => {return {Type: "AWS::IAM::ManagedPolicy", ...resource}}
export const AWS_IAM_OIDCPROVIDER:RESOURCE<_AWS_IAM_OIDCPROVIDER> = (resource) => {return {Type: "AWS::IAM::OIDCProvider", ...resource}}
export const AWS_IAM_POLICY:RESOURCE<_AWS_IAM_POLICY> = (resource) => {return {Type: "AWS::IAM::Policy", ...resource}}
export const AWS_IAM_ROLE:RESOURCE<_AWS_IAM_ROLE> = (resource) => {return {Type: "AWS::IAM::Role", ...resource}}
export const AWS_IAM_ROLEPOLICY:RESOURCE<_AWS_IAM_ROLEPOLICY> = (resource) => {return {Type: "AWS::IAM::RolePolicy", ...resource}}
export const AWS_IAM_SAMLPROVIDER:RESOURCE<_AWS_IAM_SAMLPROVIDER> = (resource) => {return {Type: "AWS::IAM::SAMLProvider", ...resource}}
export const AWS_IAM_SERVERCERTIFICATE:RESOURCE<_AWS_IAM_SERVERCERTIFICATE> = (resource) => {return {Type: "AWS::IAM::ServerCertificate", ...resource}}
export const AWS_IAM_SERVICELINKEDROLE:RESOURCE<_AWS_IAM_SERVICELINKEDROLE> = (resource) => {return {Type: "AWS::IAM::ServiceLinkedRole", ...resource}}
export const AWS_IAM_USER:RESOURCE<_AWS_IAM_USER> = (resource) => {return {Type: "AWS::IAM::User", ...resource}}
export const AWS_IAM_USERPOLICY:RESOURCE<_AWS_IAM_USERPOLICY> = (resource) => {return {Type: "AWS::IAM::UserPolicy", ...resource}}
export const AWS_IAM_USERTOGROUPADDITION:RESOURCE<_AWS_IAM_USERTOGROUPADDITION> = (resource) => {return {Type: "AWS::IAM::UserToGroupAddition", ...resource}}
export const AWS_IAM_VIRTUALMFADEVICE:RESOURCE<_AWS_IAM_VIRTUALMFADEVICE> = (resource) => {return {Type: "AWS::IAM::VirtualMFADevice", ...resource}}
export const AWS_IDENTITYSTORE_GROUP:RESOURCE<_AWS_IDENTITYSTORE_GROUP> = (resource) => {return {Type: "AWS::IdentityStore::Group", ...resource}}
export const AWS_IDENTITYSTORE_GROUPMEMBERSHIP:RESOURCE<_AWS_IDENTITYSTORE_GROUPMEMBERSHIP> = (resource) => {return {Type: "AWS::IdentityStore::GroupMembership", ...resource}}
export const AWS_IMAGEBUILDER_COMPONENT:RESOURCE<_AWS_IMAGEBUILDER_COMPONENT> = (resource) => {return {Type: "AWS::ImageBuilder::Component", ...resource}}
export const AWS_IMAGEBUILDER_CONTAINERRECIPE:RESOURCE<_AWS_IMAGEBUILDER_CONTAINERRECIPE> = (resource) => {return {Type: "AWS::ImageBuilder::ContainerRecipe", ...resource}}
export const AWS_IMAGEBUILDER_DISTRIBUTIONCONFIGURATION:RESOURCE<_AWS_IMAGEBUILDER_DISTRIBUTIONCONFIGURATION> = (resource) => {return {Type: "AWS::ImageBuilder::DistributionConfiguration", ...resource}}
export const AWS_IMAGEBUILDER_IMAGE:RESOURCE<_AWS_IMAGEBUILDER_IMAGE> = (resource) => {return {Type: "AWS::ImageBuilder::Image", ...resource}}
export const AWS_IMAGEBUILDER_IMAGEPIPELINE:RESOURCE<_AWS_IMAGEBUILDER_IMAGEPIPELINE> = (resource) => {return {Type: "AWS::ImageBuilder::ImagePipeline", ...resource}}
export const AWS_IMAGEBUILDER_IMAGERECIPE:RESOURCE<_AWS_IMAGEBUILDER_IMAGERECIPE> = (resource) => {return {Type: "AWS::ImageBuilder::ImageRecipe", ...resource}}
export const AWS_IMAGEBUILDER_INFRASTRUCTURECONFIGURATION:RESOURCE<_AWS_IMAGEBUILDER_INFRASTRUCTURECONFIGURATION> = (resource) => {return {Type: "AWS::ImageBuilder::InfrastructureConfiguration", ...resource}}
export const AWS_IMAGEBUILDER_LIFECYCLEPOLICY:RESOURCE<_AWS_IMAGEBUILDER_LIFECYCLEPOLICY> = (resource) => {return {Type: "AWS::ImageBuilder::LifecyclePolicy", ...resource}}
export const AWS_IMAGEBUILDER_WORKFLOW:RESOURCE<_AWS_IMAGEBUILDER_WORKFLOW> = (resource) => {return {Type: "AWS::ImageBuilder::Workflow", ...resource}}
export const AWS_INSPECTOR_ASSESSMENTTARGET:RESOURCE<_AWS_INSPECTOR_ASSESSMENTTARGET> = (resource) => {return {Type: "AWS::Inspector::AssessmentTarget", ...resource}}
export const AWS_INSPECTOR_ASSESSMENTTEMPLATE:RESOURCE<_AWS_INSPECTOR_ASSESSMENTTEMPLATE> = (resource) => {return {Type: "AWS::Inspector::AssessmentTemplate", ...resource}}
export const AWS_INSPECTOR_RESOURCEGROUP:RESOURCE<_AWS_INSPECTOR_RESOURCEGROUP> = (resource) => {return {Type: "AWS::Inspector::ResourceGroup", ...resource}}
export const AWS_INSPECTORV2_CISSCANCONFIGURATION:RESOURCE<_AWS_INSPECTORV2_CISSCANCONFIGURATION> = (resource) => {return {Type: "AWS::InspectorV2::CisScanConfiguration", ...resource}}
export const AWS_INSPECTORV2_FILTER:RESOURCE<_AWS_INSPECTORV2_FILTER> = (resource) => {return {Type: "AWS::InspectorV2::Filter", ...resource}}
export const AWS_INTERNETMONITOR_MONITOR:RESOURCE<_AWS_INTERNETMONITOR_MONITOR> = (resource) => {return {Type: "AWS::InternetMonitor::Monitor", ...resource}}
export const AWS_IOT_ACCOUNTAUDITCONFIGURATION:RESOURCE<_AWS_IOT_ACCOUNTAUDITCONFIGURATION> = (resource) => {return {Type: "AWS::IoT::AccountAuditConfiguration", ...resource}}
export const AWS_IOT_AUTHORIZER:RESOURCE<_AWS_IOT_AUTHORIZER> = (resource) => {return {Type: "AWS::IoT::Authorizer", ...resource}}
export const AWS_IOT_BILLINGGROUP:RESOURCE<_AWS_IOT_BILLINGGROUP> = (resource) => {return {Type: "AWS::IoT::BillingGroup", ...resource}}
export const AWS_IOT_CACERTIFICATE:RESOURCE<_AWS_IOT_CACERTIFICATE> = (resource) => {return {Type: "AWS::IoT::CACertificate", ...resource}}
export const AWS_IOT_CERTIFICATE:RESOURCE<_AWS_IOT_CERTIFICATE> = (resource) => {return {Type: "AWS::IoT::Certificate", ...resource}}
export const AWS_IOT_CERTIFICATEPROVIDER:RESOURCE<_AWS_IOT_CERTIFICATEPROVIDER> = (resource) => {return {Type: "AWS::IoT::CertificateProvider", ...resource}}
export const AWS_IOT_CUSTOMMETRIC:RESOURCE<_AWS_IOT_CUSTOMMETRIC> = (resource) => {return {Type: "AWS::IoT::CustomMetric", ...resource}}
export const AWS_IOT_DIMENSION:RESOURCE<_AWS_IOT_DIMENSION> = (resource) => {return {Type: "AWS::IoT::Dimension", ...resource}}
export const AWS_IOT_DOMAINCONFIGURATION:RESOURCE<_AWS_IOT_DOMAINCONFIGURATION> = (resource) => {return {Type: "AWS::IoT::DomainConfiguration", ...resource}}
export const AWS_IOT_FLEETMETRIC:RESOURCE<_AWS_IOT_FLEETMETRIC> = (resource) => {return {Type: "AWS::IoT::FleetMetric", ...resource}}
export const AWS_IOT_JOBTEMPLATE:RESOURCE<_AWS_IOT_JOBTEMPLATE> = (resource) => {return {Type: "AWS::IoT::JobTemplate", ...resource}}
export const AWS_IOT_LOGGING:RESOURCE<_AWS_IOT_LOGGING> = (resource) => {return {Type: "AWS::IoT::Logging", ...resource}}
export const AWS_IOT_MITIGATIONACTION:RESOURCE<_AWS_IOT_MITIGATIONACTION> = (resource) => {return {Type: "AWS::IoT::MitigationAction", ...resource}}
export const AWS_IOT_POLICY:RESOURCE<_AWS_IOT_POLICY> = (resource) => {return {Type: "AWS::IoT::Policy", ...resource}}
export const AWS_IOT_POLICYPRINCIPALATTACHMENT:RESOURCE<_AWS_IOT_POLICYPRINCIPALATTACHMENT> = (resource) => {return {Type: "AWS::IoT::PolicyPrincipalAttachment", ...resource}}
export const AWS_IOT_PROVISIONINGTEMPLATE:RESOURCE<_AWS_IOT_PROVISIONINGTEMPLATE> = (resource) => {return {Type: "AWS::IoT::ProvisioningTemplate", ...resource}}
export const AWS_IOT_RESOURCESPECIFICLOGGING:RESOURCE<_AWS_IOT_RESOURCESPECIFICLOGGING> = (resource) => {return {Type: "AWS::IoT::ResourceSpecificLogging", ...resource}}
export const AWS_IOT_ROLEALIAS:RESOURCE<_AWS_IOT_ROLEALIAS> = (resource) => {return {Type: "AWS::IoT::RoleAlias", ...resource}}
export const AWS_IOT_SCHEDULEDAUDIT:RESOURCE<_AWS_IOT_SCHEDULEDAUDIT> = (resource) => {return {Type: "AWS::IoT::ScheduledAudit", ...resource}}
export const AWS_IOT_SECURITYPROFILE:RESOURCE<_AWS_IOT_SECURITYPROFILE> = (resource) => {return {Type: "AWS::IoT::SecurityProfile", ...resource}}
export const AWS_IOT_SOFTWAREPACKAGE:RESOURCE<_AWS_IOT_SOFTWAREPACKAGE> = (resource) => {return {Type: "AWS::IoT::SoftwarePackage", ...resource}}
export const AWS_IOT_SOFTWAREPACKAGEVERSION:RESOURCE<_AWS_IOT_SOFTWAREPACKAGEVERSION> = (resource) => {return {Type: "AWS::IoT::SoftwarePackageVersion", ...resource}}
export const AWS_IOT_THING:RESOURCE<_AWS_IOT_THING> = (resource) => {return {Type: "AWS::IoT::Thing", ...resource}}
export const AWS_IOT_THINGGROUP:RESOURCE<_AWS_IOT_THINGGROUP> = (resource) => {return {Type: "AWS::IoT::ThingGroup", ...resource}}
export const AWS_IOT_THINGPRINCIPALATTACHMENT:RESOURCE<_AWS_IOT_THINGPRINCIPALATTACHMENT> = (resource) => {return {Type: "AWS::IoT::ThingPrincipalAttachment", ...resource}}
export const AWS_IOT_THINGTYPE:RESOURCE<_AWS_IOT_THINGTYPE> = (resource) => {return {Type: "AWS::IoT::ThingType", ...resource}}
export const AWS_IOT_TOPICRULE:RESOURCE<_AWS_IOT_TOPICRULE> = (resource) => {return {Type: "AWS::IoT::TopicRule", ...resource}}
export const AWS_IOT_TOPICRULEDESTINATION:RESOURCE<_AWS_IOT_TOPICRULEDESTINATION> = (resource) => {return {Type: "AWS::IoT::TopicRuleDestination", ...resource}}
export const AWS_IOT1CLICK_DEVICE:RESOURCE<_AWS_IOT1CLICK_DEVICE> = (resource) => {return {Type: "AWS::IoT1Click::Device", ...resource}}
export const AWS_IOT1CLICK_PLACEMENT:RESOURCE<_AWS_IOT1CLICK_PLACEMENT> = (resource) => {return {Type: "AWS::IoT1Click::Placement", ...resource}}
export const AWS_IOT1CLICK_PROJECT:RESOURCE<_AWS_IOT1CLICK_PROJECT> = (resource) => {return {Type: "AWS::IoT1Click::Project", ...resource}}
export const AWS_IOTANALYTICS_CHANNEL:RESOURCE<_AWS_IOTANALYTICS_CHANNEL> = (resource) => {return {Type: "AWS::IoTAnalytics::Channel", ...resource}}
export const AWS_IOTANALYTICS_DATASET:RESOURCE<_AWS_IOTANALYTICS_DATASET> = (resource) => {return {Type: "AWS::IoTAnalytics::Dataset", ...resource}}
export const AWS_IOTANALYTICS_DATASTORE:RESOURCE<_AWS_IOTANALYTICS_DATASTORE> = (resource) => {return {Type: "AWS::IoTAnalytics::Datastore", ...resource}}
export const AWS_IOTANALYTICS_PIPELINE:RESOURCE<_AWS_IOTANALYTICS_PIPELINE> = (resource) => {return {Type: "AWS::IoTAnalytics::Pipeline", ...resource}}
export const AWS_IOTCOREDEVICEADVISOR_SUITEDEFINITION:RESOURCE<_AWS_IOTCOREDEVICEADVISOR_SUITEDEFINITION> = (resource) => {return {Type: "AWS::IoTCoreDeviceAdvisor::SuiteDefinition", ...resource}}
export const AWS_IOTEVENTS_ALARMMODEL:RESOURCE<_AWS_IOTEVENTS_ALARMMODEL> = (resource) => {return {Type: "AWS::IoTEvents::AlarmModel", ...resource}}
export const AWS_IOTEVENTS_DETECTORMODEL:RESOURCE<_AWS_IOTEVENTS_DETECTORMODEL> = (resource) => {return {Type: "AWS::IoTEvents::DetectorModel", ...resource}}
export const AWS_IOTEVENTS_INPUT:RESOURCE<_AWS_IOTEVENTS_INPUT> = (resource) => {return {Type: "AWS::IoTEvents::Input", ...resource}}
export const AWS_IOTFLEETHUB_APPLICATION:RESOURCE<_AWS_IOTFLEETHUB_APPLICATION> = (resource) => {return {Type: "AWS::IoTFleetHub::Application", ...resource}}
export const AWS_IOTFLEETWISE_CAMPAIGN:RESOURCE<_AWS_IOTFLEETWISE_CAMPAIGN> = (resource) => {return {Type: "AWS::IoTFleetWise::Campaign", ...resource}}
export const AWS_IOTFLEETWISE_DECODERMANIFEST:RESOURCE<_AWS_IOTFLEETWISE_DECODERMANIFEST> = (resource) => {return {Type: "AWS::IoTFleetWise::DecoderManifest", ...resource}}
export const AWS_IOTFLEETWISE_FLEET:RESOURCE<_AWS_IOTFLEETWISE_FLEET> = (resource) => {return {Type: "AWS::IoTFleetWise::Fleet", ...resource}}
export const AWS_IOTFLEETWISE_MODELMANIFEST:RESOURCE<_AWS_IOTFLEETWISE_MODELMANIFEST> = (resource) => {return {Type: "AWS::IoTFleetWise::ModelManifest", ...resource}}
export const AWS_IOTFLEETWISE_SIGNALCATALOG:RESOURCE<_AWS_IOTFLEETWISE_SIGNALCATALOG> = (resource) => {return {Type: "AWS::IoTFleetWise::SignalCatalog", ...resource}}
export const AWS_IOTFLEETWISE_VEHICLE:RESOURCE<_AWS_IOTFLEETWISE_VEHICLE> = (resource) => {return {Type: "AWS::IoTFleetWise::Vehicle", ...resource}}
export const AWS_IOTSITEWISE_ACCESSPOLICY:RESOURCE<_AWS_IOTSITEWISE_ACCESSPOLICY> = (resource) => {return {Type: "AWS::IoTSiteWise::AccessPolicy", ...resource}}
export const AWS_IOTSITEWISE_ASSET:RESOURCE<_AWS_IOTSITEWISE_ASSET> = (resource) => {return {Type: "AWS::IoTSiteWise::Asset", ...resource}}
export const AWS_IOTSITEWISE_ASSETMODEL:RESOURCE<_AWS_IOTSITEWISE_ASSETMODEL> = (resource) => {return {Type: "AWS::IoTSiteWise::AssetModel", ...resource}}
export const AWS_IOTSITEWISE_DASHBOARD:RESOURCE<_AWS_IOTSITEWISE_DASHBOARD> = (resource) => {return {Type: "AWS::IoTSiteWise::Dashboard", ...resource}}
export const AWS_IOTSITEWISE_GATEWAY:RESOURCE<_AWS_IOTSITEWISE_GATEWAY> = (resource) => {return {Type: "AWS::IoTSiteWise::Gateway", ...resource}}
export const AWS_IOTSITEWISE_PORTAL:RESOURCE<_AWS_IOTSITEWISE_PORTAL> = (resource) => {return {Type: "AWS::IoTSiteWise::Portal", ...resource}}
export const AWS_IOTSITEWISE_PROJECT:RESOURCE<_AWS_IOTSITEWISE_PROJECT> = (resource) => {return {Type: "AWS::IoTSiteWise::Project", ...resource}}
export const AWS_IOTTHINGSGRAPH_FLOWTEMPLATE:RESOURCE<_AWS_IOTTHINGSGRAPH_FLOWTEMPLATE> = (resource) => {return {Type: "AWS::IoTThingsGraph::FlowTemplate", ...resource}}
export const AWS_IOTTWINMAKER_COMPONENTTYPE:RESOURCE<_AWS_IOTTWINMAKER_COMPONENTTYPE> = (resource) => {return {Type: "AWS::IoTTwinMaker::ComponentType", ...resource}}
export const AWS_IOTTWINMAKER_ENTITY:RESOURCE<_AWS_IOTTWINMAKER_ENTITY> = (resource) => {return {Type: "AWS::IoTTwinMaker::Entity", ...resource}}
export const AWS_IOTTWINMAKER_SCENE:RESOURCE<_AWS_IOTTWINMAKER_SCENE> = (resource) => {return {Type: "AWS::IoTTwinMaker::Scene", ...resource}}
export const AWS_IOTTWINMAKER_SYNCJOB:RESOURCE<_AWS_IOTTWINMAKER_SYNCJOB> = (resource) => {return {Type: "AWS::IoTTwinMaker::SyncJob", ...resource}}
export const AWS_IOTTWINMAKER_WORKSPACE:RESOURCE<_AWS_IOTTWINMAKER_WORKSPACE> = (resource) => {return {Type: "AWS::IoTTwinMaker::Workspace", ...resource}}
export const AWS_IOTWIRELESS_DESTINATION:RESOURCE<_AWS_IOTWIRELESS_DESTINATION> = (resource) => {return {Type: "AWS::IoTWireless::Destination", ...resource}}
export const AWS_IOTWIRELESS_DEVICEPROFILE:RESOURCE<_AWS_IOTWIRELESS_DEVICEPROFILE> = (resource) => {return {Type: "AWS::IoTWireless::DeviceProfile", ...resource}}
export const AWS_IOTWIRELESS_FUOTATASK:RESOURCE<_AWS_IOTWIRELESS_FUOTATASK> = (resource) => {return {Type: "AWS::IoTWireless::FuotaTask", ...resource}}
export const AWS_IOTWIRELESS_MULTICASTGROUP:RESOURCE<_AWS_IOTWIRELESS_MULTICASTGROUP> = (resource) => {return {Type: "AWS::IoTWireless::MulticastGroup", ...resource}}
export const AWS_IOTWIRELESS_NETWORKANALYZERCONFIGURATION:RESOURCE<_AWS_IOTWIRELESS_NETWORKANALYZERCONFIGURATION> = (resource) => {return {Type: "AWS::IoTWireless::NetworkAnalyzerConfiguration", ...resource}}
export const AWS_IOTWIRELESS_PARTNERACCOUNT:RESOURCE<_AWS_IOTWIRELESS_PARTNERACCOUNT> = (resource) => {return {Type: "AWS::IoTWireless::PartnerAccount", ...resource}}
export const AWS_IOTWIRELESS_SERVICEPROFILE:RESOURCE<_AWS_IOTWIRELESS_SERVICEPROFILE> = (resource) => {return {Type: "AWS::IoTWireless::ServiceProfile", ...resource}}
export const AWS_IOTWIRELESS_TASKDEFINITION:RESOURCE<_AWS_IOTWIRELESS_TASKDEFINITION> = (resource) => {return {Type: "AWS::IoTWireless::TaskDefinition", ...resource}}
export const AWS_IOTWIRELESS_WIRELESSDEVICE:RESOURCE<_AWS_IOTWIRELESS_WIRELESSDEVICE> = (resource) => {return {Type: "AWS::IoTWireless::WirelessDevice", ...resource}}
export const AWS_IOTWIRELESS_WIRELESSDEVICEIMPORTTASK:RESOURCE<_AWS_IOTWIRELESS_WIRELESSDEVICEIMPORTTASK> = (resource) => {return {Type: "AWS::IoTWireless::WirelessDeviceImportTask", ...resource}}
export const AWS_IOTWIRELESS_WIRELESSGATEWAY:RESOURCE<_AWS_IOTWIRELESS_WIRELESSGATEWAY> = (resource) => {return {Type: "AWS::IoTWireless::WirelessGateway", ...resource}}
export const AWS_IVS_CHANNEL:RESOURCE<_AWS_IVS_CHANNEL> = (resource) => {return {Type: "AWS::IVS::Channel", ...resource}}
export const AWS_IVS_ENCODERCONFIGURATION:RESOURCE<_AWS_IVS_ENCODERCONFIGURATION> = (resource) => {return {Type: "AWS::IVS::EncoderConfiguration", ...resource}}
export const AWS_IVS_PLAYBACKKEYPAIR:RESOURCE<_AWS_IVS_PLAYBACKKEYPAIR> = (resource) => {return {Type: "AWS::IVS::PlaybackKeyPair", ...resource}}
export const AWS_IVS_PLAYBACKRESTRICTIONPOLICY:RESOURCE<_AWS_IVS_PLAYBACKRESTRICTIONPOLICY> = (resource) => {return {Type: "AWS::IVS::PlaybackRestrictionPolicy", ...resource}}
export const AWS_IVS_PUBLICKEY:RESOURCE<_AWS_IVS_PUBLICKEY> = (resource) => {return {Type: "AWS::IVS::PublicKey", ...resource}}
export const AWS_IVS_RECORDINGCONFIGURATION:RESOURCE<_AWS_IVS_RECORDINGCONFIGURATION> = (resource) => {return {Type: "AWS::IVS::RecordingConfiguration", ...resource}}
export const AWS_IVS_STAGE:RESOURCE<_AWS_IVS_STAGE> = (resource) => {return {Type: "AWS::IVS::Stage", ...resource}}
export const AWS_IVS_STORAGECONFIGURATION:RESOURCE<_AWS_IVS_STORAGECONFIGURATION> = (resource) => {return {Type: "AWS::IVS::StorageConfiguration", ...resource}}
export const AWS_IVS_STREAMKEY:RESOURCE<_AWS_IVS_STREAMKEY> = (resource) => {return {Type: "AWS::IVS::StreamKey", ...resource}}
export const AWS_IVSCHAT_LOGGINGCONFIGURATION:RESOURCE<_AWS_IVSCHAT_LOGGINGCONFIGURATION> = (resource) => {return {Type: "AWS::IVSChat::LoggingConfiguration", ...resource}}
export const AWS_IVSCHAT_ROOM:RESOURCE<_AWS_IVSCHAT_ROOM> = (resource) => {return {Type: "AWS::IVSChat::Room", ...resource}}
export const AWS_KAFKACONNECT_CONNECTOR:RESOURCE<_AWS_KAFKACONNECT_CONNECTOR> = (resource) => {return {Type: "AWS::KafkaConnect::Connector", ...resource}}
export const AWS_KAFKACONNECT_CUSTOMPLUGIN:RESOURCE<_AWS_KAFKACONNECT_CUSTOMPLUGIN> = (resource) => {return {Type: "AWS::KafkaConnect::CustomPlugin", ...resource}}
export const AWS_KAFKACONNECT_WORKERCONFIGURATION:RESOURCE<_AWS_KAFKACONNECT_WORKERCONFIGURATION> = (resource) => {return {Type: "AWS::KafkaConnect::WorkerConfiguration", ...resource}}
export const AWS_KENDRA_DATASOURCE:RESOURCE<_AWS_KENDRA_DATASOURCE> = (resource) => {return {Type: "AWS::Kendra::DataSource", ...resource}}
export const AWS_KENDRA_FAQ:RESOURCE<_AWS_KENDRA_FAQ> = (resource) => {return {Type: "AWS::Kendra::Faq", ...resource}}
export const AWS_KENDRA_INDEX:RESOURCE<_AWS_KENDRA_INDEX> = (resource) => {return {Type: "AWS::Kendra::Index", ...resource}}
export const AWS_KENDRARANKING_EXECUTIONPLAN:RESOURCE<_AWS_KENDRARANKING_EXECUTIONPLAN> = (resource) => {return {Type: "AWS::KendraRanking::ExecutionPlan", ...resource}}
export const AWS_KINESIS_STREAM:RESOURCE<_AWS_KINESIS_STREAM> = (resource) => {return {Type: "AWS::Kinesis::Stream", ...resource}}
export const AWS_KINESIS_STREAMCONSUMER:RESOURCE<_AWS_KINESIS_STREAMCONSUMER> = (resource) => {return {Type: "AWS::Kinesis::StreamConsumer", ...resource}}
export const AWS_KINESISANALYTICS_APPLICATION:RESOURCE<_AWS_KINESISANALYTICS_APPLICATION> = (resource) => {return {Type: "AWS::KinesisAnalytics::Application", ...resource}}
export const AWS_KINESISANALYTICS_APPLICATIONOUTPUT:RESOURCE<_AWS_KINESISANALYTICS_APPLICATIONOUTPUT> = (resource) => {return {Type: "AWS::KinesisAnalytics::ApplicationOutput", ...resource}}
export const AWS_KINESISANALYTICS_APPLICATIONREFERENCEDATASOURCE:RESOURCE<_AWS_KINESISANALYTICS_APPLICATIONREFERENCEDATASOURCE> = (resource) => {return {Type: "AWS::KinesisAnalytics::ApplicationReferenceDataSource", ...resource}}
export const AWS_KINESISANALYTICSV2_APPLICATION:RESOURCE<_AWS_KINESISANALYTICSV2_APPLICATION> = (resource) => {return {Type: "AWS::KinesisAnalyticsV2::Application", ...resource}}
export const AWS_KINESISANALYTICSV2_APPLICATIONCLOUDWATCHLOGGINGOPTION:RESOURCE<_AWS_KINESISANALYTICSV2_APPLICATIONCLOUDWATCHLOGGINGOPTION> = (resource) => {return {Type: "AWS::KinesisAnalyticsV2::ApplicationCloudWatchLoggingOption", ...resource}}
export const AWS_KINESISANALYTICSV2_APPLICATIONOUTPUT:RESOURCE<_AWS_KINESISANALYTICSV2_APPLICATIONOUTPUT> = (resource) => {return {Type: "AWS::KinesisAnalyticsV2::ApplicationOutput", ...resource}}
export const AWS_KINESISANALYTICSV2_APPLICATIONREFERENCEDATASOURCE:RESOURCE<_AWS_KINESISANALYTICSV2_APPLICATIONREFERENCEDATASOURCE> = (resource) => {return {Type: "AWS::KinesisAnalyticsV2::ApplicationReferenceDataSource", ...resource}}
export const AWS_KINESISFIREHOSE_DELIVERYSTREAM:RESOURCE<_AWS_KINESISFIREHOSE_DELIVERYSTREAM> = (resource) => {return {Type: "AWS::KinesisFirehose::DeliveryStream", ...resource}}
export const AWS_KINESISVIDEO_SIGNALINGCHANNEL:RESOURCE<_AWS_KINESISVIDEO_SIGNALINGCHANNEL> = (resource) => {return {Type: "AWS::KinesisVideo::SignalingChannel", ...resource}}
export const AWS_KINESISVIDEO_STREAM:RESOURCE<_AWS_KINESISVIDEO_STREAM> = (resource) => {return {Type: "AWS::KinesisVideo::Stream", ...resource}}
export const AWS_KMS_ALIAS:RESOURCE<_AWS_KMS_ALIAS> = (resource) => {return {Type: "AWS::KMS::Alias", ...resource}}
export const AWS_KMS_KEY:RESOURCE<_AWS_KMS_KEY> = (resource) => {return {Type: "AWS::KMS::Key", ...resource}}
export const AWS_KMS_REPLICAKEY:RESOURCE<_AWS_KMS_REPLICAKEY> = (resource) => {return {Type: "AWS::KMS::ReplicaKey", ...resource}}
export const AWS_LAKEFORMATION_DATACELLSFILTER:RESOURCE<_AWS_LAKEFORMATION_DATACELLSFILTER> = (resource) => {return {Type: "AWS::LakeFormation::DataCellsFilter", ...resource}}
export const AWS_LAKEFORMATION_DATALAKESETTINGS:RESOURCE<_AWS_LAKEFORMATION_DATALAKESETTINGS> = (resource) => {return {Type: "AWS::LakeFormation::DataLakeSettings", ...resource}}
export const AWS_LAKEFORMATION_PERMISSIONS:RESOURCE<_AWS_LAKEFORMATION_PERMISSIONS> = (resource) => {return {Type: "AWS::LakeFormation::Permissions", ...resource}}
export const AWS_LAKEFORMATION_PRINCIPALPERMISSIONS:RESOURCE<_AWS_LAKEFORMATION_PRINCIPALPERMISSIONS> = (resource) => {return {Type: "AWS::LakeFormation::PrincipalPermissions", ...resource}}
export const AWS_LAKEFORMATION_RESOURCE:RESOURCE<_AWS_LAKEFORMATION_RESOURCE> = (resource) => {return {Type: "AWS::LakeFormation::Resource", ...resource}}
export const AWS_LAKEFORMATION_TAG:RESOURCE<_AWS_LAKEFORMATION_TAG> = (resource) => {return {Type: "AWS::LakeFormation::Tag", ...resource}}
export const AWS_LAKEFORMATION_TAGASSOCIATION:RESOURCE<_AWS_LAKEFORMATION_TAGASSOCIATION> = (resource) => {return {Type: "AWS::LakeFormation::TagAssociation", ...resource}}
export const AWS_LAMBDA_ALIAS:RESOURCE<_AWS_LAMBDA_ALIAS> = (resource) => {return {Type: "AWS::Lambda::Alias", ...resource}}
export const AWS_LAMBDA_CODESIGNINGCONFIG:RESOURCE<_AWS_LAMBDA_CODESIGNINGCONFIG> = (resource) => {return {Type: "AWS::Lambda::CodeSigningConfig", ...resource}}
export const AWS_LAMBDA_EVENTINVOKECONFIG:RESOURCE<_AWS_LAMBDA_EVENTINVOKECONFIG> = (resource) => {return {Type: "AWS::Lambda::EventInvokeConfig", ...resource}}
export const AWS_LAMBDA_EVENTSOURCEMAPPING:RESOURCE<_AWS_LAMBDA_EVENTSOURCEMAPPING> = (resource) => {return {Type: "AWS::Lambda::EventSourceMapping", ...resource}}
export const AWS_LAMBDA_FUNCTION:RESOURCE<_AWS_LAMBDA_FUNCTION> = (resource) => {return {Type: "AWS::Lambda::Function", ...resource}}
export const AWS_LAMBDA_LAYERVERSION:RESOURCE<_AWS_LAMBDA_LAYERVERSION> = (resource) => {return {Type: "AWS::Lambda::LayerVersion", ...resource}}
export const AWS_LAMBDA_LAYERVERSIONPERMISSION:RESOURCE<_AWS_LAMBDA_LAYERVERSIONPERMISSION> = (resource) => {return {Type: "AWS::Lambda::LayerVersionPermission", ...resource}}
export const AWS_LAMBDA_PERMISSION:RESOURCE<_AWS_LAMBDA_PERMISSION> = (resource) => {return {Type: "AWS::Lambda::Permission", ...resource}}
export const AWS_LAMBDA_URL:RESOURCE<_AWS_LAMBDA_URL> = (resource) => {return {Type: "AWS::Lambda::Url", ...resource}}
export const AWS_LAMBDA_VERSION:RESOURCE<_AWS_LAMBDA_VERSION> = (resource) => {return {Type: "AWS::Lambda::Version", ...resource}}
export const AWS_LAUNCHWIZARD_DEPLOYMENT:RESOURCE<_AWS_LAUNCHWIZARD_DEPLOYMENT> = (resource) => {return {Type: "AWS::LaunchWizard::Deployment", ...resource}}
export const AWS_LEX_BOT:RESOURCE<_AWS_LEX_BOT> = (resource) => {return {Type: "AWS::Lex::Bot", ...resource}}
export const AWS_LEX_BOTALIAS:RESOURCE<_AWS_LEX_BOTALIAS> = (resource) => {return {Type: "AWS::Lex::BotAlias", ...resource}}
export const AWS_LEX_BOTVERSION:RESOURCE<_AWS_LEX_BOTVERSION> = (resource) => {return {Type: "AWS::Lex::BotVersion", ...resource}}
export const AWS_LEX_RESOURCEPOLICY:RESOURCE<_AWS_LEX_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::Lex::ResourcePolicy", ...resource}}
export const AWS_LICENSEMANAGER_GRANT:RESOURCE<_AWS_LICENSEMANAGER_GRANT> = (resource) => {return {Type: "AWS::LicenseManager::Grant", ...resource}}
export const AWS_LICENSEMANAGER_LICENSE:RESOURCE<_AWS_LICENSEMANAGER_LICENSE> = (resource) => {return {Type: "AWS::LicenseManager::License", ...resource}}
export const AWS_LIGHTSAIL_ALARM:RESOURCE<_AWS_LIGHTSAIL_ALARM> = (resource) => {return {Type: "AWS::Lightsail::Alarm", ...resource}}
export const AWS_LIGHTSAIL_BUCKET:RESOURCE<_AWS_LIGHTSAIL_BUCKET> = (resource) => {return {Type: "AWS::Lightsail::Bucket", ...resource}}
export const AWS_LIGHTSAIL_CERTIFICATE:RESOURCE<_AWS_LIGHTSAIL_CERTIFICATE> = (resource) => {return {Type: "AWS::Lightsail::Certificate", ...resource}}
export const AWS_LIGHTSAIL_CONTAINER:RESOURCE<_AWS_LIGHTSAIL_CONTAINER> = (resource) => {return {Type: "AWS::Lightsail::Container", ...resource}}
export const AWS_LIGHTSAIL_DATABASE:RESOURCE<_AWS_LIGHTSAIL_DATABASE> = (resource) => {return {Type: "AWS::Lightsail::Database", ...resource}}
export const AWS_LIGHTSAIL_DISK:RESOURCE<_AWS_LIGHTSAIL_DISK> = (resource) => {return {Type: "AWS::Lightsail::Disk", ...resource}}
export const AWS_LIGHTSAIL_DISTRIBUTION:RESOURCE<_AWS_LIGHTSAIL_DISTRIBUTION> = (resource) => {return {Type: "AWS::Lightsail::Distribution", ...resource}}
export const AWS_LIGHTSAIL_INSTANCE:RESOURCE<_AWS_LIGHTSAIL_INSTANCE> = (resource) => {return {Type: "AWS::Lightsail::Instance", ...resource}}
export const AWS_LIGHTSAIL_LOADBALANCER:RESOURCE<_AWS_LIGHTSAIL_LOADBALANCER> = (resource) => {return {Type: "AWS::Lightsail::LoadBalancer", ...resource}}
export const AWS_LIGHTSAIL_LOADBALANCERTLSCERTIFICATE:RESOURCE<_AWS_LIGHTSAIL_LOADBALANCERTLSCERTIFICATE> = (resource) => {return {Type: "AWS::Lightsail::LoadBalancerTlsCertificate", ...resource}}
export const AWS_LIGHTSAIL_STATICIP:RESOURCE<_AWS_LIGHTSAIL_STATICIP> = (resource) => {return {Type: "AWS::Lightsail::StaticIp", ...resource}}
export const AWS_LOCATION_APIKEY:RESOURCE<_AWS_LOCATION_APIKEY> = (resource) => {return {Type: "AWS::Location::APIKey", ...resource}}
export const AWS_LOCATION_GEOFENCECOLLECTION:RESOURCE<_AWS_LOCATION_GEOFENCECOLLECTION> = (resource) => {return {Type: "AWS::Location::GeofenceCollection", ...resource}}
export const AWS_LOCATION_MAP:RESOURCE<_AWS_LOCATION_MAP> = (resource) => {return {Type: "AWS::Location::Map", ...resource}}
export const AWS_LOCATION_PLACEINDEX:RESOURCE<_AWS_LOCATION_PLACEINDEX> = (resource) => {return {Type: "AWS::Location::PlaceIndex", ...resource}}
export const AWS_LOCATION_ROUTECALCULATOR:RESOURCE<_AWS_LOCATION_ROUTECALCULATOR> = (resource) => {return {Type: "AWS::Location::RouteCalculator", ...resource}}
export const AWS_LOCATION_TRACKER:RESOURCE<_AWS_LOCATION_TRACKER> = (resource) => {return {Type: "AWS::Location::Tracker", ...resource}}
export const AWS_LOCATION_TRACKERCONSUMER:RESOURCE<_AWS_LOCATION_TRACKERCONSUMER> = (resource) => {return {Type: "AWS::Location::TrackerConsumer", ...resource}}
export const AWS_LOGS_ACCOUNTPOLICY:RESOURCE<_AWS_LOGS_ACCOUNTPOLICY> = (resource) => {return {Type: "AWS::Logs::AccountPolicy", ...resource}}
export const AWS_LOGS_DELIVERY:RESOURCE<_AWS_LOGS_DELIVERY> = (resource) => {return {Type: "AWS::Logs::Delivery", ...resource}}
export const AWS_LOGS_DELIVERYDESTINATION:RESOURCE<_AWS_LOGS_DELIVERYDESTINATION> = (resource) => {return {Type: "AWS::Logs::DeliveryDestination", ...resource}}
export const AWS_LOGS_DELIVERYSOURCE:RESOURCE<_AWS_LOGS_DELIVERYSOURCE> = (resource) => {return {Type: "AWS::Logs::DeliverySource", ...resource}}
export const AWS_LOGS_DESTINATION:RESOURCE<_AWS_LOGS_DESTINATION> = (resource) => {return {Type: "AWS::Logs::Destination", ...resource}}
export const AWS_LOGS_LOGANOMALYDETECTOR:RESOURCE<_AWS_LOGS_LOGANOMALYDETECTOR> = (resource) => {return {Type: "AWS::Logs::LogAnomalyDetector", ...resource}}
export const AWS_LOGS_LOGGROUP:RESOURCE<_AWS_LOGS_LOGGROUP> = (resource) => {return {Type: "AWS::Logs::LogGroup", ...resource}}
export const AWS_LOGS_LOGSTREAM:RESOURCE<_AWS_LOGS_LOGSTREAM> = (resource) => {return {Type: "AWS::Logs::LogStream", ...resource}}
export const AWS_LOGS_METRICFILTER:RESOURCE<_AWS_LOGS_METRICFILTER> = (resource) => {return {Type: "AWS::Logs::MetricFilter", ...resource}}
export const AWS_LOGS_QUERYDEFINITION:RESOURCE<_AWS_LOGS_QUERYDEFINITION> = (resource) => {return {Type: "AWS::Logs::QueryDefinition", ...resource}}
export const AWS_LOGS_RESOURCEPOLICY:RESOURCE<_AWS_LOGS_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::Logs::ResourcePolicy", ...resource}}
export const AWS_LOGS_SUBSCRIPTIONFILTER:RESOURCE<_AWS_LOGS_SUBSCRIPTIONFILTER> = (resource) => {return {Type: "AWS::Logs::SubscriptionFilter", ...resource}}
export const AWS_LOOKOUTEQUIPMENT_INFERENCESCHEDULER:RESOURCE<_AWS_LOOKOUTEQUIPMENT_INFERENCESCHEDULER> = (resource) => {return {Type: "AWS::LookoutEquipment::InferenceScheduler", ...resource}}
export const AWS_LOOKOUTMETRICS_ALERT:RESOURCE<_AWS_LOOKOUTMETRICS_ALERT> = (resource) => {return {Type: "AWS::LookoutMetrics::Alert", ...resource}}
export const AWS_LOOKOUTMETRICS_ANOMALYDETECTOR:RESOURCE<_AWS_LOOKOUTMETRICS_ANOMALYDETECTOR> = (resource) => {return {Type: "AWS::LookoutMetrics::AnomalyDetector", ...resource}}
export const AWS_LOOKOUTVISION_PROJECT:RESOURCE<_AWS_LOOKOUTVISION_PROJECT> = (resource) => {return {Type: "AWS::LookoutVision::Project", ...resource}}
export const AWS_M2_APPLICATION:RESOURCE<_AWS_M2_APPLICATION> = (resource) => {return {Type: "AWS::M2::Application", ...resource}}
export const AWS_M2_ENVIRONMENT:RESOURCE<_AWS_M2_ENVIRONMENT> = (resource) => {return {Type: "AWS::M2::Environment", ...resource}}
export const AWS_MACIE_ALLOWLIST:RESOURCE<_AWS_MACIE_ALLOWLIST> = (resource) => {return {Type: "AWS::Macie::AllowList", ...resource}}
export const AWS_MACIE_CUSTOMDATAIDENTIFIER:RESOURCE<_AWS_MACIE_CUSTOMDATAIDENTIFIER> = (resource) => {return {Type: "AWS::Macie::CustomDataIdentifier", ...resource}}
export const AWS_MACIE_FINDINGSFILTER:RESOURCE<_AWS_MACIE_FINDINGSFILTER> = (resource) => {return {Type: "AWS::Macie::FindingsFilter", ...resource}}
export const AWS_MACIE_SESSION:RESOURCE<_AWS_MACIE_SESSION> = (resource) => {return {Type: "AWS::Macie::Session", ...resource}}
export const AWS_MANAGEDBLOCKCHAIN_ACCESSOR:RESOURCE<_AWS_MANAGEDBLOCKCHAIN_ACCESSOR> = (resource) => {return {Type: "AWS::ManagedBlockchain::Accessor", ...resource}}
export const AWS_MANAGEDBLOCKCHAIN_MEMBER:RESOURCE<_AWS_MANAGEDBLOCKCHAIN_MEMBER> = (resource) => {return {Type: "AWS::ManagedBlockchain::Member", ...resource}}
export const AWS_MANAGEDBLOCKCHAIN_NODE:RESOURCE<_AWS_MANAGEDBLOCKCHAIN_NODE> = (resource) => {return {Type: "AWS::ManagedBlockchain::Node", ...resource}}
export const AWS_MEDIACONNECT_BRIDGE:RESOURCE<_AWS_MEDIACONNECT_BRIDGE> = (resource) => {return {Type: "AWS::MediaConnect::Bridge", ...resource}}
export const AWS_MEDIACONNECT_BRIDGEOUTPUT:RESOURCE<_AWS_MEDIACONNECT_BRIDGEOUTPUT> = (resource) => {return {Type: "AWS::MediaConnect::BridgeOutput", ...resource}}
export const AWS_MEDIACONNECT_BRIDGESOURCE:RESOURCE<_AWS_MEDIACONNECT_BRIDGESOURCE> = (resource) => {return {Type: "AWS::MediaConnect::BridgeSource", ...resource}}
export const AWS_MEDIACONNECT_FLOW:RESOURCE<_AWS_MEDIACONNECT_FLOW> = (resource) => {return {Type: "AWS::MediaConnect::Flow", ...resource}}
export const AWS_MEDIACONNECT_FLOWENTITLEMENT:RESOURCE<_AWS_MEDIACONNECT_FLOWENTITLEMENT> = (resource) => {return {Type: "AWS::MediaConnect::FlowEntitlement", ...resource}}
export const AWS_MEDIACONNECT_FLOWOUTPUT:RESOURCE<_AWS_MEDIACONNECT_FLOWOUTPUT> = (resource) => {return {Type: "AWS::MediaConnect::FlowOutput", ...resource}}
export const AWS_MEDIACONNECT_FLOWSOURCE:RESOURCE<_AWS_MEDIACONNECT_FLOWSOURCE> = (resource) => {return {Type: "AWS::MediaConnect::FlowSource", ...resource}}
export const AWS_MEDIACONNECT_FLOWVPCINTERFACE:RESOURCE<_AWS_MEDIACONNECT_FLOWVPCINTERFACE> = (resource) => {return {Type: "AWS::MediaConnect::FlowVpcInterface", ...resource}}
export const AWS_MEDIACONNECT_GATEWAY:RESOURCE<_AWS_MEDIACONNECT_GATEWAY> = (resource) => {return {Type: "AWS::MediaConnect::Gateway", ...resource}}
export const AWS_MEDIACONVERT_JOBTEMPLATE:RESOURCE<_AWS_MEDIACONVERT_JOBTEMPLATE> = (resource) => {return {Type: "AWS::MediaConvert::JobTemplate", ...resource}}
export const AWS_MEDIACONVERT_PRESET:RESOURCE<_AWS_MEDIACONVERT_PRESET> = (resource) => {return {Type: "AWS::MediaConvert::Preset", ...resource}}
export const AWS_MEDIACONVERT_QUEUE:RESOURCE<_AWS_MEDIACONVERT_QUEUE> = (resource) => {return {Type: "AWS::MediaConvert::Queue", ...resource}}
export const AWS_MEDIALIVE_CHANNEL:RESOURCE<_AWS_MEDIALIVE_CHANNEL> = (resource) => {return {Type: "AWS::MediaLive::Channel", ...resource}}
export const AWS_MEDIALIVE_CHANNELPLACEMENTGROUP:RESOURCE<_AWS_MEDIALIVE_CHANNELPLACEMENTGROUP> = (resource) => {return {Type: "AWS::MediaLive::ChannelPlacementGroup", ...resource}}
export const AWS_MEDIALIVE_CLOUDWATCHALARMTEMPLATE:RESOURCE<_AWS_MEDIALIVE_CLOUDWATCHALARMTEMPLATE> = (resource) => {return {Type: "AWS::MediaLive::CloudWatchAlarmTemplate", ...resource}}
export const AWS_MEDIALIVE_CLOUDWATCHALARMTEMPLATEGROUP:RESOURCE<_AWS_MEDIALIVE_CLOUDWATCHALARMTEMPLATEGROUP> = (resource) => {return {Type: "AWS::MediaLive::CloudWatchAlarmTemplateGroup", ...resource}}
export const AWS_MEDIALIVE_CLUSTER:RESOURCE<_AWS_MEDIALIVE_CLUSTER> = (resource) => {return {Type: "AWS::MediaLive::Cluster", ...resource}}
export const AWS_MEDIALIVE_EVENTBRIDGERULETEMPLATE:RESOURCE<_AWS_MEDIALIVE_EVENTBRIDGERULETEMPLATE> = (resource) => {return {Type: "AWS::MediaLive::EventBridgeRuleTemplate", ...resource}}
export const AWS_MEDIALIVE_EVENTBRIDGERULETEMPLATEGROUP:RESOURCE<_AWS_MEDIALIVE_EVENTBRIDGERULETEMPLATEGROUP> = (resource) => {return {Type: "AWS::MediaLive::EventBridgeRuleTemplateGroup", ...resource}}
export const AWS_MEDIALIVE_INPUT:RESOURCE<_AWS_MEDIALIVE_INPUT> = (resource) => {return {Type: "AWS::MediaLive::Input", ...resource}}
export const AWS_MEDIALIVE_INPUTSECURITYGROUP:RESOURCE<_AWS_MEDIALIVE_INPUTSECURITYGROUP> = (resource) => {return {Type: "AWS::MediaLive::InputSecurityGroup", ...resource}}
export const AWS_MEDIALIVE_MULTIPLEX:RESOURCE<_AWS_MEDIALIVE_MULTIPLEX> = (resource) => {return {Type: "AWS::MediaLive::Multiplex", ...resource}}
export const AWS_MEDIALIVE_MULTIPLEXPROGRAM:RESOURCE<_AWS_MEDIALIVE_MULTIPLEXPROGRAM> = (resource) => {return {Type: "AWS::MediaLive::Multiplexprogram", ...resource}}
export const AWS_MEDIALIVE_NETWORK:RESOURCE<_AWS_MEDIALIVE_NETWORK> = (resource) => {return {Type: "AWS::MediaLive::Network", ...resource}}
export const AWS_MEDIALIVE_SDISOURCE:RESOURCE<_AWS_MEDIALIVE_SDISOURCE> = (resource) => {return {Type: "AWS::MediaLive::SdiSource", ...resource}}
export const AWS_MEDIALIVE_SIGNALMAP:RESOURCE<_AWS_MEDIALIVE_SIGNALMAP> = (resource) => {return {Type: "AWS::MediaLive::SignalMap", ...resource}}
export const AWS_MEDIAPACKAGE_ASSET:RESOURCE<_AWS_MEDIAPACKAGE_ASSET> = (resource) => {return {Type: "AWS::MediaPackage::Asset", ...resource}}
export const AWS_MEDIAPACKAGE_CHANNEL:RESOURCE<_AWS_MEDIAPACKAGE_CHANNEL> = (resource) => {return {Type: "AWS::MediaPackage::Channel", ...resource}}
export const AWS_MEDIAPACKAGE_ORIGINENDPOINT:RESOURCE<_AWS_MEDIAPACKAGE_ORIGINENDPOINT> = (resource) => {return {Type: "AWS::MediaPackage::OriginEndpoint", ...resource}}
export const AWS_MEDIAPACKAGE_PACKAGINGCONFIGURATION:RESOURCE<_AWS_MEDIAPACKAGE_PACKAGINGCONFIGURATION> = (resource) => {return {Type: "AWS::MediaPackage::PackagingConfiguration", ...resource}}
export const AWS_MEDIAPACKAGE_PACKAGINGGROUP:RESOURCE<_AWS_MEDIAPACKAGE_PACKAGINGGROUP> = (resource) => {return {Type: "AWS::MediaPackage::PackagingGroup", ...resource}}
export const AWS_MEDIAPACKAGEV2_CHANNEL:RESOURCE<_AWS_MEDIAPACKAGEV2_CHANNEL> = (resource) => {return {Type: "AWS::MediaPackageV2::Channel", ...resource}}
export const AWS_MEDIAPACKAGEV2_CHANNELGROUP:RESOURCE<_AWS_MEDIAPACKAGEV2_CHANNELGROUP> = (resource) => {return {Type: "AWS::MediaPackageV2::ChannelGroup", ...resource}}
export const AWS_MEDIAPACKAGEV2_CHANNELPOLICY:RESOURCE<_AWS_MEDIAPACKAGEV2_CHANNELPOLICY> = (resource) => {return {Type: "AWS::MediaPackageV2::ChannelPolicy", ...resource}}
export const AWS_MEDIAPACKAGEV2_ORIGINENDPOINT:RESOURCE<_AWS_MEDIAPACKAGEV2_ORIGINENDPOINT> = (resource) => {return {Type: "AWS::MediaPackageV2::OriginEndpoint", ...resource}}
export const AWS_MEDIAPACKAGEV2_ORIGINENDPOINTPOLICY:RESOURCE<_AWS_MEDIAPACKAGEV2_ORIGINENDPOINTPOLICY> = (resource) => {return {Type: "AWS::MediaPackageV2::OriginEndpointPolicy", ...resource}}
export const AWS_MEDIASTORE_CONTAINER:RESOURCE<_AWS_MEDIASTORE_CONTAINER> = (resource) => {return {Type: "AWS::MediaStore::Container", ...resource}}
export const AWS_MEDIATAILOR_CHANNEL:RESOURCE<_AWS_MEDIATAILOR_CHANNEL> = (resource) => {return {Type: "AWS::MediaTailor::Channel", ...resource}}
export const AWS_MEDIATAILOR_CHANNELPOLICY:RESOURCE<_AWS_MEDIATAILOR_CHANNELPOLICY> = (resource) => {return {Type: "AWS::MediaTailor::ChannelPolicy", ...resource}}
export const AWS_MEDIATAILOR_LIVESOURCE:RESOURCE<_AWS_MEDIATAILOR_LIVESOURCE> = (resource) => {return {Type: "AWS::MediaTailor::LiveSource", ...resource}}
export const AWS_MEDIATAILOR_PLAYBACKCONFIGURATION:RESOURCE<_AWS_MEDIATAILOR_PLAYBACKCONFIGURATION> = (resource) => {return {Type: "AWS::MediaTailor::PlaybackConfiguration", ...resource}}
export const AWS_MEDIATAILOR_SOURCELOCATION:RESOURCE<_AWS_MEDIATAILOR_SOURCELOCATION> = (resource) => {return {Type: "AWS::MediaTailor::SourceLocation", ...resource}}
export const AWS_MEDIATAILOR_VODSOURCE:RESOURCE<_AWS_MEDIATAILOR_VODSOURCE> = (resource) => {return {Type: "AWS::MediaTailor::VodSource", ...resource}}
export const AWS_MEMORYDB_ACL:RESOURCE<_AWS_MEMORYDB_ACL> = (resource) => {return {Type: "AWS::MemoryDB::ACL", ...resource}}
export const AWS_MEMORYDB_CLUSTER:RESOURCE<_AWS_MEMORYDB_CLUSTER> = (resource) => {return {Type: "AWS::MemoryDB::Cluster", ...resource}}
export const AWS_MEMORYDB_PARAMETERGROUP:RESOURCE<_AWS_MEMORYDB_PARAMETERGROUP> = (resource) => {return {Type: "AWS::MemoryDB::ParameterGroup", ...resource}}
export const AWS_MEMORYDB_SUBNETGROUP:RESOURCE<_AWS_MEMORYDB_SUBNETGROUP> = (resource) => {return {Type: "AWS::MemoryDB::SubnetGroup", ...resource}}
export const AWS_MEMORYDB_USER:RESOURCE<_AWS_MEMORYDB_USER> = (resource) => {return {Type: "AWS::MemoryDB::User", ...resource}}
export const AWS_MSK_BATCHSCRAMSECRET:RESOURCE<_AWS_MSK_BATCHSCRAMSECRET> = (resource) => {return {Type: "AWS::MSK::BatchScramSecret", ...resource}}
export const AWS_MSK_CLUSTER:RESOURCE<_AWS_MSK_CLUSTER> = (resource) => {return {Type: "AWS::MSK::Cluster", ...resource}}
export const AWS_MSK_CLUSTERPOLICY:RESOURCE<_AWS_MSK_CLUSTERPOLICY> = (resource) => {return {Type: "AWS::MSK::ClusterPolicy", ...resource}}
export const AWS_MSK_CONFIGURATION:RESOURCE<_AWS_MSK_CONFIGURATION> = (resource) => {return {Type: "AWS::MSK::Configuration", ...resource}}
export const AWS_MSK_REPLICATOR:RESOURCE<_AWS_MSK_REPLICATOR> = (resource) => {return {Type: "AWS::MSK::Replicator", ...resource}}
export const AWS_MSK_SERVERLESSCLUSTER:RESOURCE<_AWS_MSK_SERVERLESSCLUSTER> = (resource) => {return {Type: "AWS::MSK::ServerlessCluster", ...resource}}
export const AWS_MSK_VPCCONNECTION:RESOURCE<_AWS_MSK_VPCCONNECTION> = (resource) => {return {Type: "AWS::MSK::VpcConnection", ...resource}}
export const AWS_MWAA_ENVIRONMENT:RESOURCE<_AWS_MWAA_ENVIRONMENT> = (resource) => {return {Type: "AWS::MWAA::Environment", ...resource}}
export const AWS_NEPTUNE_DBCLUSTER:RESOURCE<_AWS_NEPTUNE_DBCLUSTER> = (resource) => {return {Type: "AWS::Neptune::DBCluster", ...resource}}
export const AWS_NEPTUNE_DBCLUSTERPARAMETERGROUP:RESOURCE<_AWS_NEPTUNE_DBCLUSTERPARAMETERGROUP> = (resource) => {return {Type: "AWS::Neptune::DBClusterParameterGroup", ...resource}}
export const AWS_NEPTUNE_DBINSTANCE:RESOURCE<_AWS_NEPTUNE_DBINSTANCE> = (resource) => {return {Type: "AWS::Neptune::DBInstance", ...resource}}
export const AWS_NEPTUNE_DBPARAMETERGROUP:RESOURCE<_AWS_NEPTUNE_DBPARAMETERGROUP> = (resource) => {return {Type: "AWS::Neptune::DBParameterGroup", ...resource}}
export const AWS_NEPTUNE_DBSUBNETGROUP:RESOURCE<_AWS_NEPTUNE_DBSUBNETGROUP> = (resource) => {return {Type: "AWS::Neptune::DBSubnetGroup", ...resource}}
export const AWS_NEPTUNE_EVENTSUBSCRIPTION:RESOURCE<_AWS_NEPTUNE_EVENTSUBSCRIPTION> = (resource) => {return {Type: "AWS::Neptune::EventSubscription", ...resource}}
export const AWS_NEPTUNEGRAPH_GRAPH:RESOURCE<_AWS_NEPTUNEGRAPH_GRAPH> = (resource) => {return {Type: "AWS::NeptuneGraph::Graph", ...resource}}
export const AWS_NEPTUNEGRAPH_PRIVATEGRAPHENDPOINT:RESOURCE<_AWS_NEPTUNEGRAPH_PRIVATEGRAPHENDPOINT> = (resource) => {return {Type: "AWS::NeptuneGraph::PrivateGraphEndpoint", ...resource}}
export const AWS_NETWORKFIREWALL_FIREWALL:RESOURCE<_AWS_NETWORKFIREWALL_FIREWALL> = (resource) => {return {Type: "AWS::NetworkFirewall::Firewall", ...resource}}
export const AWS_NETWORKFIREWALL_FIREWALLPOLICY:RESOURCE<_AWS_NETWORKFIREWALL_FIREWALLPOLICY> = (resource) => {return {Type: "AWS::NetworkFirewall::FirewallPolicy", ...resource}}
export const AWS_NETWORKFIREWALL_LOGGINGCONFIGURATION:RESOURCE<_AWS_NETWORKFIREWALL_LOGGINGCONFIGURATION> = (resource) => {return {Type: "AWS::NetworkFirewall::LoggingConfiguration", ...resource}}
export const AWS_NETWORKFIREWALL_RULEGROUP:RESOURCE<_AWS_NETWORKFIREWALL_RULEGROUP> = (resource) => {return {Type: "AWS::NetworkFirewall::RuleGroup", ...resource}}
export const AWS_NETWORKFIREWALL_TLSINSPECTIONCONFIGURATION:RESOURCE<_AWS_NETWORKFIREWALL_TLSINSPECTIONCONFIGURATION> = (resource) => {return {Type: "AWS::NetworkFirewall::TLSInspectionConfiguration", ...resource}}
export const AWS_NETWORKMANAGER_CONNECTATTACHMENT:RESOURCE<_AWS_NETWORKMANAGER_CONNECTATTACHMENT> = (resource) => {return {Type: "AWS::NetworkManager::ConnectAttachment", ...resource}}
export const AWS_NETWORKMANAGER_CONNECTPEER:RESOURCE<_AWS_NETWORKMANAGER_CONNECTPEER> = (resource) => {return {Type: "AWS::NetworkManager::ConnectPeer", ...resource}}
export const AWS_NETWORKMANAGER_CORENETWORK:RESOURCE<_AWS_NETWORKMANAGER_CORENETWORK> = (resource) => {return {Type: "AWS::NetworkManager::CoreNetwork", ...resource}}
export const AWS_NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION:RESOURCE<_AWS_NETWORKMANAGER_CUSTOMERGATEWAYASSOCIATION> = (resource) => {return {Type: "AWS::NetworkManager::CustomerGatewayAssociation", ...resource}}
export const AWS_NETWORKMANAGER_DEVICE:RESOURCE<_AWS_NETWORKMANAGER_DEVICE> = (resource) => {return {Type: "AWS::NetworkManager::Device", ...resource}}
export const AWS_NETWORKMANAGER_GLOBALNETWORK:RESOURCE<_AWS_NETWORKMANAGER_GLOBALNETWORK> = (resource) => {return {Type: "AWS::NetworkManager::GlobalNetwork", ...resource}}
export const AWS_NETWORKMANAGER_LINK:RESOURCE<_AWS_NETWORKMANAGER_LINK> = (resource) => {return {Type: "AWS::NetworkManager::Link", ...resource}}
export const AWS_NETWORKMANAGER_LINKASSOCIATION:RESOURCE<_AWS_NETWORKMANAGER_LINKASSOCIATION> = (resource) => {return {Type: "AWS::NetworkManager::LinkAssociation", ...resource}}
export const AWS_NETWORKMANAGER_SITE:RESOURCE<_AWS_NETWORKMANAGER_SITE> = (resource) => {return {Type: "AWS::NetworkManager::Site", ...resource}}
export const AWS_NETWORKMANAGER_SITETOSITEVPNATTACHMENT:RESOURCE<_AWS_NETWORKMANAGER_SITETOSITEVPNATTACHMENT> = (resource) => {return {Type: "AWS::NetworkManager::SiteToSiteVpnAttachment", ...resource}}
export const AWS_NETWORKMANAGER_TRANSITGATEWAYPEERING:RESOURCE<_AWS_NETWORKMANAGER_TRANSITGATEWAYPEERING> = (resource) => {return {Type: "AWS::NetworkManager::TransitGatewayPeering", ...resource}}
export const AWS_NETWORKMANAGER_TRANSITGATEWAYREGISTRATION:RESOURCE<_AWS_NETWORKMANAGER_TRANSITGATEWAYREGISTRATION> = (resource) => {return {Type: "AWS::NetworkManager::TransitGatewayRegistration", ...resource}}
export const AWS_NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT:RESOURCE<_AWS_NETWORKMANAGER_TRANSITGATEWAYROUTETABLEATTACHMENT> = (resource) => {return {Type: "AWS::NetworkManager::TransitGatewayRouteTableAttachment", ...resource}}
export const AWS_NETWORKMANAGER_VPCATTACHMENT:RESOURCE<_AWS_NETWORKMANAGER_VPCATTACHMENT> = (resource) => {return {Type: "AWS::NetworkManager::VpcAttachment", ...resource}}
export const AWS_NIMBLESTUDIO_LAUNCHPROFILE:RESOURCE<_AWS_NIMBLESTUDIO_LAUNCHPROFILE> = (resource) => {return {Type: "AWS::NimbleStudio::LaunchProfile", ...resource}}
export const AWS_NIMBLESTUDIO_STREAMINGIMAGE:RESOURCE<_AWS_NIMBLESTUDIO_STREAMINGIMAGE> = (resource) => {return {Type: "AWS::NimbleStudio::StreamingImage", ...resource}}
export const AWS_NIMBLESTUDIO_STUDIO:RESOURCE<_AWS_NIMBLESTUDIO_STUDIO> = (resource) => {return {Type: "AWS::NimbleStudio::Studio", ...resource}}
export const AWS_NIMBLESTUDIO_STUDIOCOMPONENT:RESOURCE<_AWS_NIMBLESTUDIO_STUDIOCOMPONENT> = (resource) => {return {Type: "AWS::NimbleStudio::StudioComponent", ...resource}}
export const AWS_OAM_LINK:RESOURCE<_AWS_OAM_LINK> = (resource) => {return {Type: "AWS::Oam::Link", ...resource}}
export const AWS_OAM_SINK:RESOURCE<_AWS_OAM_SINK> = (resource) => {return {Type: "AWS::Oam::Sink", ...resource}}
export const AWS_OMICS_ANNOTATIONSTORE:RESOURCE<_AWS_OMICS_ANNOTATIONSTORE> = (resource) => {return {Type: "AWS::Omics::AnnotationStore", ...resource}}
export const AWS_OMICS_REFERENCESTORE:RESOURCE<_AWS_OMICS_REFERENCESTORE> = (resource) => {return {Type: "AWS::Omics::ReferenceStore", ...resource}}
export const AWS_OMICS_RUNGROUP:RESOURCE<_AWS_OMICS_RUNGROUP> = (resource) => {return {Type: "AWS::Omics::RunGroup", ...resource}}
export const AWS_OMICS_SEQUENCESTORE:RESOURCE<_AWS_OMICS_SEQUENCESTORE> = (resource) => {return {Type: "AWS::Omics::SequenceStore", ...resource}}
export const AWS_OMICS_VARIANTSTORE:RESOURCE<_AWS_OMICS_VARIANTSTORE> = (resource) => {return {Type: "AWS::Omics::VariantStore", ...resource}}
export const AWS_OMICS_WORKFLOW:RESOURCE<_AWS_OMICS_WORKFLOW> = (resource) => {return {Type: "AWS::Omics::Workflow", ...resource}}
export const AWS_OPENSEARCHSERVERLESS_ACCESSPOLICY:RESOURCE<_AWS_OPENSEARCHSERVERLESS_ACCESSPOLICY> = (resource) => {return {Type: "AWS::OpenSearchServerless::AccessPolicy", ...resource}}
export const AWS_OPENSEARCHSERVERLESS_COLLECTION:RESOURCE<_AWS_OPENSEARCHSERVERLESS_COLLECTION> = (resource) => {return {Type: "AWS::OpenSearchServerless::Collection", ...resource}}
export const AWS_OPENSEARCHSERVERLESS_LIFECYCLEPOLICY:RESOURCE<_AWS_OPENSEARCHSERVERLESS_LIFECYCLEPOLICY> = (resource) => {return {Type: "AWS::OpenSearchServerless::LifecyclePolicy", ...resource}}
export const AWS_OPENSEARCHSERVERLESS_SECURITYCONFIG:RESOURCE<_AWS_OPENSEARCHSERVERLESS_SECURITYCONFIG> = (resource) => {return {Type: "AWS::OpenSearchServerless::SecurityConfig", ...resource}}
export const AWS_OPENSEARCHSERVERLESS_SECURITYPOLICY:RESOURCE<_AWS_OPENSEARCHSERVERLESS_SECURITYPOLICY> = (resource) => {return {Type: "AWS::OpenSearchServerless::SecurityPolicy", ...resource}}
export const AWS_OPENSEARCHSERVERLESS_VPCENDPOINT:RESOURCE<_AWS_OPENSEARCHSERVERLESS_VPCENDPOINT> = (resource) => {return {Type: "AWS::OpenSearchServerless::VpcEndpoint", ...resource}}
export const AWS_OPENSEARCHSERVICE_DOMAIN:RESOURCE<_AWS_OPENSEARCHSERVICE_DOMAIN> = (resource) => {return {Type: "AWS::OpenSearchService::Domain", ...resource}}
export const AWS_OPSWORKS_APP:RESOURCE<_AWS_OPSWORKS_APP> = (resource) => {return {Type: "AWS::OpsWorks::App", ...resource}}
export const AWS_OPSWORKS_ELASTICLOADBALANCERATTACHMENT:RESOURCE<_AWS_OPSWORKS_ELASTICLOADBALANCERATTACHMENT> = (resource) => {return {Type: "AWS::OpsWorks::ElasticLoadBalancerAttachment", ...resource}}
export const AWS_OPSWORKS_INSTANCE:RESOURCE<_AWS_OPSWORKS_INSTANCE> = (resource) => {return {Type: "AWS::OpsWorks::Instance", ...resource}}
export const AWS_OPSWORKS_LAYER:RESOURCE<_AWS_OPSWORKS_LAYER> = (resource) => {return {Type: "AWS::OpsWorks::Layer", ...resource}}
export const AWS_OPSWORKS_STACK:RESOURCE<_AWS_OPSWORKS_STACK> = (resource) => {return {Type: "AWS::OpsWorks::Stack", ...resource}}
export const AWS_OPSWORKS_USERPROFILE:RESOURCE<_AWS_OPSWORKS_USERPROFILE> = (resource) => {return {Type: "AWS::OpsWorks::UserProfile", ...resource}}
export const AWS_OPSWORKS_VOLUME:RESOURCE<_AWS_OPSWORKS_VOLUME> = (resource) => {return {Type: "AWS::OpsWorks::Volume", ...resource}}
export const AWS_OPSWORKSCM_SERVER:RESOURCE<_AWS_OPSWORKSCM_SERVER> = (resource) => {return {Type: "AWS::OpsWorksCM::Server", ...resource}}
export const AWS_ORGANIZATIONS_ACCOUNT:RESOURCE<_AWS_ORGANIZATIONS_ACCOUNT> = (resource) => {return {Type: "AWS::Organizations::Account", ...resource}}
export const AWS_ORGANIZATIONS_ORGANIZATION:RESOURCE<_AWS_ORGANIZATIONS_ORGANIZATION> = (resource) => {return {Type: "AWS::Organizations::Organization", ...resource}}
export const AWS_ORGANIZATIONS_ORGANIZATIONALUNIT:RESOURCE<_AWS_ORGANIZATIONS_ORGANIZATIONALUNIT> = (resource) => {return {Type: "AWS::Organizations::OrganizationalUnit", ...resource}}
export const AWS_ORGANIZATIONS_POLICY:RESOURCE<_AWS_ORGANIZATIONS_POLICY> = (resource) => {return {Type: "AWS::Organizations::Policy", ...resource}}
export const AWS_ORGANIZATIONS_RESOURCEPOLICY:RESOURCE<_AWS_ORGANIZATIONS_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::Organizations::ResourcePolicy", ...resource}}
export const AWS_OSIS_PIPELINE:RESOURCE<_AWS_OSIS_PIPELINE> = (resource) => {return {Type: "AWS::OSIS::Pipeline", ...resource}}
export const AWS_PANORAMA_APPLICATIONINSTANCE:RESOURCE<_AWS_PANORAMA_APPLICATIONINSTANCE> = (resource) => {return {Type: "AWS::Panorama::ApplicationInstance", ...resource}}
export const AWS_PANORAMA_PACKAGE:RESOURCE<_AWS_PANORAMA_PACKAGE> = (resource) => {return {Type: "AWS::Panorama::Package", ...resource}}
export const AWS_PANORAMA_PACKAGEVERSION:RESOURCE<_AWS_PANORAMA_PACKAGEVERSION> = (resource) => {return {Type: "AWS::Panorama::PackageVersion", ...resource}}
export const AWS_PAYMENTCRYPTOGRAPHY_ALIAS:RESOURCE<_AWS_PAYMENTCRYPTOGRAPHY_ALIAS> = (resource) => {return {Type: "AWS::PaymentCryptography::Alias", ...resource}}
export const AWS_PAYMENTCRYPTOGRAPHY_KEY:RESOURCE<_AWS_PAYMENTCRYPTOGRAPHY_KEY> = (resource) => {return {Type: "AWS::PaymentCryptography::Key", ...resource}}
export const AWS_PCACONNECTORAD_CONNECTOR:RESOURCE<_AWS_PCACONNECTORAD_CONNECTOR> = (resource) => {return {Type: "AWS::PCAConnectorAD::Connector", ...resource}}
export const AWS_PCACONNECTORAD_DIRECTORYREGISTRATION:RESOURCE<_AWS_PCACONNECTORAD_DIRECTORYREGISTRATION> = (resource) => {return {Type: "AWS::PCAConnectorAD::DirectoryRegistration", ...resource}}
export const AWS_PCACONNECTORAD_SERVICEPRINCIPALNAME:RESOURCE<_AWS_PCACONNECTORAD_SERVICEPRINCIPALNAME> = (resource) => {return {Type: "AWS::PCAConnectorAD::ServicePrincipalName", ...resource}}
export const AWS_PCACONNECTORAD_TEMPLATE:RESOURCE<_AWS_PCACONNECTORAD_TEMPLATE> = (resource) => {return {Type: "AWS::PCAConnectorAD::Template", ...resource}}
export const AWS_PCACONNECTORAD_TEMPLATEGROUPACCESSCONTROLENTRY:RESOURCE<_AWS_PCACONNECTORAD_TEMPLATEGROUPACCESSCONTROLENTRY> = (resource) => {return {Type: "AWS::PCAConnectorAD::TemplateGroupAccessControlEntry", ...resource}}
export const AWS_PCACONNECTORSCEP_CHALLENGE:RESOURCE<_AWS_PCACONNECTORSCEP_CHALLENGE> = (resource) => {return {Type: "AWS::PCAConnectorSCEP::Challenge", ...resource}}
export const AWS_PCACONNECTORSCEP_CONNECTOR:RESOURCE<_AWS_PCACONNECTORSCEP_CONNECTOR> = (resource) => {return {Type: "AWS::PCAConnectorSCEP::Connector", ...resource}}
export const AWS_PERSONALIZE_DATASET:RESOURCE<_AWS_PERSONALIZE_DATASET> = (resource) => {return {Type: "AWS::Personalize::Dataset", ...resource}}
export const AWS_PERSONALIZE_DATASETGROUP:RESOURCE<_AWS_PERSONALIZE_DATASETGROUP> = (resource) => {return {Type: "AWS::Personalize::DatasetGroup", ...resource}}
export const AWS_PERSONALIZE_SCHEMA:RESOURCE<_AWS_PERSONALIZE_SCHEMA> = (resource) => {return {Type: "AWS::Personalize::Schema", ...resource}}
export const AWS_PERSONALIZE_SOLUTION:RESOURCE<_AWS_PERSONALIZE_SOLUTION> = (resource) => {return {Type: "AWS::Personalize::Solution", ...resource}}
export const AWS_PINPOINT_ADMCHANNEL:RESOURCE<_AWS_PINPOINT_ADMCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::ADMChannel", ...resource}}
export const AWS_PINPOINT_APNSCHANNEL:RESOURCE<_AWS_PINPOINT_APNSCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::APNSChannel", ...resource}}
export const AWS_PINPOINT_APNSSANDBOXCHANNEL:RESOURCE<_AWS_PINPOINT_APNSSANDBOXCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::APNSSandboxChannel", ...resource}}
export const AWS_PINPOINT_APNSVOIPCHANNEL:RESOURCE<_AWS_PINPOINT_APNSVOIPCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::APNSVoipChannel", ...resource}}
export const AWS_PINPOINT_APNSVOIPSANDBOXCHANNEL:RESOURCE<_AWS_PINPOINT_APNSVOIPSANDBOXCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::APNSVoipSandboxChannel", ...resource}}
export const AWS_PINPOINT_APP:RESOURCE<_AWS_PINPOINT_APP> = (resource) => {return {Type: "AWS::Pinpoint::App", ...resource}}
export const AWS_PINPOINT_APPLICATIONSETTINGS:RESOURCE<_AWS_PINPOINT_APPLICATIONSETTINGS> = (resource) => {return {Type: "AWS::Pinpoint::ApplicationSettings", ...resource}}
export const AWS_PINPOINT_BAIDUCHANNEL:RESOURCE<_AWS_PINPOINT_BAIDUCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::BaiduChannel", ...resource}}
export const AWS_PINPOINT_CAMPAIGN:RESOURCE<_AWS_PINPOINT_CAMPAIGN> = (resource) => {return {Type: "AWS::Pinpoint::Campaign", ...resource}}
export const AWS_PINPOINT_EMAILCHANNEL:RESOURCE<_AWS_PINPOINT_EMAILCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::EmailChannel", ...resource}}
export const AWS_PINPOINT_EMAILTEMPLATE:RESOURCE<_AWS_PINPOINT_EMAILTEMPLATE> = (resource) => {return {Type: "AWS::Pinpoint::EmailTemplate", ...resource}}
export const AWS_PINPOINT_EVENTSTREAM:RESOURCE<_AWS_PINPOINT_EVENTSTREAM> = (resource) => {return {Type: "AWS::Pinpoint::EventStream", ...resource}}
export const AWS_PINPOINT_GCMCHANNEL:RESOURCE<_AWS_PINPOINT_GCMCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::GCMChannel", ...resource}}
export const AWS_PINPOINT_INAPPTEMPLATE:RESOURCE<_AWS_PINPOINT_INAPPTEMPLATE> = (resource) => {return {Type: "AWS::Pinpoint::InAppTemplate", ...resource}}
export const AWS_PINPOINT_PUSHTEMPLATE:RESOURCE<_AWS_PINPOINT_PUSHTEMPLATE> = (resource) => {return {Type: "AWS::Pinpoint::PushTemplate", ...resource}}
export const AWS_PINPOINT_SEGMENT:RESOURCE<_AWS_PINPOINT_SEGMENT> = (resource) => {return {Type: "AWS::Pinpoint::Segment", ...resource}}
export const AWS_PINPOINT_SMSCHANNEL:RESOURCE<_AWS_PINPOINT_SMSCHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::SMSChannel", ...resource}}
export const AWS_PINPOINT_SMSTEMPLATE:RESOURCE<_AWS_PINPOINT_SMSTEMPLATE> = (resource) => {return {Type: "AWS::Pinpoint::SmsTemplate", ...resource}}
export const AWS_PINPOINT_VOICECHANNEL:RESOURCE<_AWS_PINPOINT_VOICECHANNEL> = (resource) => {return {Type: "AWS::Pinpoint::VoiceChannel", ...resource}}
export const AWS_PINPOINTEMAIL_CONFIGURATIONSET:RESOURCE<_AWS_PINPOINTEMAIL_CONFIGURATIONSET> = (resource) => {return {Type: "AWS::PinpointEmail::ConfigurationSet", ...resource}}
export const AWS_PINPOINTEMAIL_CONFIGURATIONSETEVENTDESTINATION:RESOURCE<_AWS_PINPOINTEMAIL_CONFIGURATIONSETEVENTDESTINATION> = (resource) => {return {Type: "AWS::PinpointEmail::ConfigurationSetEventDestination", ...resource}}
export const AWS_PINPOINTEMAIL_DEDICATEDIPPOOL:RESOURCE<_AWS_PINPOINTEMAIL_DEDICATEDIPPOOL> = (resource) => {return {Type: "AWS::PinpointEmail::DedicatedIpPool", ...resource}}
export const AWS_PINPOINTEMAIL_IDENTITY:RESOURCE<_AWS_PINPOINTEMAIL_IDENTITY> = (resource) => {return {Type: "AWS::PinpointEmail::Identity", ...resource}}
export const AWS_PIPES_PIPE:RESOURCE<_AWS_PIPES_PIPE> = (resource) => {return {Type: "AWS::Pipes::Pipe", ...resource}}
export const AWS_PROTON_ENVIRONMENTACCOUNTCONNECTION:RESOURCE<_AWS_PROTON_ENVIRONMENTACCOUNTCONNECTION> = (resource) => {return {Type: "AWS::Proton::EnvironmentAccountConnection", ...resource}}
export const AWS_PROTON_ENVIRONMENTTEMPLATE:RESOURCE<_AWS_PROTON_ENVIRONMENTTEMPLATE> = (resource) => {return {Type: "AWS::Proton::EnvironmentTemplate", ...resource}}
export const AWS_PROTON_SERVICETEMPLATE:RESOURCE<_AWS_PROTON_SERVICETEMPLATE> = (resource) => {return {Type: "AWS::Proton::ServiceTemplate", ...resource}}
export const AWS_QBUSINESS_APPLICATION:RESOURCE<_AWS_QBUSINESS_APPLICATION> = (resource) => {return {Type: "AWS::QBusiness::Application", ...resource}}
export const AWS_QBUSINESS_DATASOURCE:RESOURCE<_AWS_QBUSINESS_DATASOURCE> = (resource) => {return {Type: "AWS::QBusiness::DataSource", ...resource}}
export const AWS_QBUSINESS_INDEX:RESOURCE<_AWS_QBUSINESS_INDEX> = (resource) => {return {Type: "AWS::QBusiness::Index", ...resource}}
export const AWS_QBUSINESS_PLUGIN:RESOURCE<_AWS_QBUSINESS_PLUGIN> = (resource) => {return {Type: "AWS::QBusiness::Plugin", ...resource}}
export const AWS_QBUSINESS_RETRIEVER:RESOURCE<_AWS_QBUSINESS_RETRIEVER> = (resource) => {return {Type: "AWS::QBusiness::Retriever", ...resource}}
export const AWS_QBUSINESS_WEBEXPERIENCE:RESOURCE<_AWS_QBUSINESS_WEBEXPERIENCE> = (resource) => {return {Type: "AWS::QBusiness::WebExperience", ...resource}}
export const AWS_QLDB_LEDGER:RESOURCE<_AWS_QLDB_LEDGER> = (resource) => {return {Type: "AWS::QLDB::Ledger", ...resource}}
export const AWS_QLDB_STREAM:RESOURCE<_AWS_QLDB_STREAM> = (resource) => {return {Type: "AWS::QLDB::Stream", ...resource}}
export const AWS_QUICKSIGHT_ANALYSIS:RESOURCE<_AWS_QUICKSIGHT_ANALYSIS> = (resource) => {return {Type: "AWS::QuickSight::Analysis", ...resource}}
export const AWS_QUICKSIGHT_DASHBOARD:RESOURCE<_AWS_QUICKSIGHT_DASHBOARD> = (resource) => {return {Type: "AWS::QuickSight::Dashboard", ...resource}}
export const AWS_QUICKSIGHT_DATASET:RESOURCE<_AWS_QUICKSIGHT_DATASET> = (resource) => {return {Type: "AWS::QuickSight::DataSet", ...resource}}
export const AWS_QUICKSIGHT_DATASOURCE:RESOURCE<_AWS_QUICKSIGHT_DATASOURCE> = (resource) => {return {Type: "AWS::QuickSight::DataSource", ...resource}}
export const AWS_QUICKSIGHT_REFRESHSCHEDULE:RESOURCE<_AWS_QUICKSIGHT_REFRESHSCHEDULE> = (resource) => {return {Type: "AWS::QuickSight::RefreshSchedule", ...resource}}
export const AWS_QUICKSIGHT_TEMPLATE:RESOURCE<_AWS_QUICKSIGHT_TEMPLATE> = (resource) => {return {Type: "AWS::QuickSight::Template", ...resource}}
export const AWS_QUICKSIGHT_THEME:RESOURCE<_AWS_QUICKSIGHT_THEME> = (resource) => {return {Type: "AWS::QuickSight::Theme", ...resource}}
export const AWS_QUICKSIGHT_TOPIC:RESOURCE<_AWS_QUICKSIGHT_TOPIC> = (resource) => {return {Type: "AWS::QuickSight::Topic", ...resource}}
export const AWS_QUICKSIGHT_VPCCONNECTION:RESOURCE<_AWS_QUICKSIGHT_VPCCONNECTION> = (resource) => {return {Type: "AWS::QuickSight::VPCConnection", ...resource}}
export const AWS_RAM_PERMISSION:RESOURCE<_AWS_RAM_PERMISSION> = (resource) => {return {Type: "AWS::RAM::Permission", ...resource}}
export const AWS_RAM_RESOURCESHARE:RESOURCE<_AWS_RAM_RESOURCESHARE> = (resource) => {return {Type: "AWS::RAM::ResourceShare", ...resource}}
export const AWS_RDS_CUSTOMDBENGINEVERSION:RESOURCE<_AWS_RDS_CUSTOMDBENGINEVERSION> = (resource) => {return {Type: "AWS::RDS::CustomDBEngineVersion", ...resource}}
export const AWS_RDS_DBCLUSTER:RESOURCE<_AWS_RDS_DBCLUSTER> = (resource) => {return {Type: "AWS::RDS::DBCluster", ...resource}}
export const AWS_RDS_DBCLUSTERPARAMETERGROUP:RESOURCE<_AWS_RDS_DBCLUSTERPARAMETERGROUP> = (resource) => {return {Type: "AWS::RDS::DBClusterParameterGroup", ...resource}}
export const AWS_RDS_DBINSTANCE:RESOURCE<_AWS_RDS_DBINSTANCE> = (resource) => {return {Type: "AWS::RDS::DBInstance", ...resource}}
export const AWS_RDS_DBPARAMETERGROUP:RESOURCE<_AWS_RDS_DBPARAMETERGROUP> = (resource) => {return {Type: "AWS::RDS::DBParameterGroup", ...resource}}
export const AWS_RDS_DBPROXY:RESOURCE<_AWS_RDS_DBPROXY> = (resource) => {return {Type: "AWS::RDS::DBProxy", ...resource}}
export const AWS_RDS_DBPROXYENDPOINT:RESOURCE<_AWS_RDS_DBPROXYENDPOINT> = (resource) => {return {Type: "AWS::RDS::DBProxyEndpoint", ...resource}}
export const AWS_RDS_DBPROXYTARGETGROUP:RESOURCE<_AWS_RDS_DBPROXYTARGETGROUP> = (resource) => {return {Type: "AWS::RDS::DBProxyTargetGroup", ...resource}}
export const AWS_RDS_DBSECURITYGROUP:RESOURCE<_AWS_RDS_DBSECURITYGROUP> = (resource) => {return {Type: "AWS::RDS::DBSecurityGroup", ...resource}}
export const AWS_RDS_DBSECURITYGROUPINGRESS:RESOURCE<_AWS_RDS_DBSECURITYGROUPINGRESS> = (resource) => {return {Type: "AWS::RDS::DBSecurityGroupIngress", ...resource}}
export const AWS_RDS_DBSUBNETGROUP:RESOURCE<_AWS_RDS_DBSUBNETGROUP> = (resource) => {return {Type: "AWS::RDS::DBSubnetGroup", ...resource}}
export const AWS_RDS_EVENTSUBSCRIPTION:RESOURCE<_AWS_RDS_EVENTSUBSCRIPTION> = (resource) => {return {Type: "AWS::RDS::EventSubscription", ...resource}}
export const AWS_RDS_GLOBALCLUSTER:RESOURCE<_AWS_RDS_GLOBALCLUSTER> = (resource) => {return {Type: "AWS::RDS::GlobalCluster", ...resource}}
export const AWS_RDS_INTEGRATION:RESOURCE<_AWS_RDS_INTEGRATION> = (resource) => {return {Type: "AWS::RDS::Integration", ...resource}}
export const AWS_RDS_OPTIONGROUP:RESOURCE<_AWS_RDS_OPTIONGROUP> = (resource) => {return {Type: "AWS::RDS::OptionGroup", ...resource}}
export const AWS_REDSHIFT_CLUSTER:RESOURCE<_AWS_REDSHIFT_CLUSTER> = (resource) => {return {Type: "AWS::Redshift::Cluster", ...resource}}
export const AWS_REDSHIFT_CLUSTERPARAMETERGROUP:RESOURCE<_AWS_REDSHIFT_CLUSTERPARAMETERGROUP> = (resource) => {return {Type: "AWS::Redshift::ClusterParameterGroup", ...resource}}
export const AWS_REDSHIFT_CLUSTERSECURITYGROUP:RESOURCE<_AWS_REDSHIFT_CLUSTERSECURITYGROUP> = (resource) => {return {Type: "AWS::Redshift::ClusterSecurityGroup", ...resource}}
export const AWS_REDSHIFT_CLUSTERSECURITYGROUPINGRESS:RESOURCE<_AWS_REDSHIFT_CLUSTERSECURITYGROUPINGRESS> = (resource) => {return {Type: "AWS::Redshift::ClusterSecurityGroupIngress", ...resource}}
export const AWS_REDSHIFT_CLUSTERSUBNETGROUP:RESOURCE<_AWS_REDSHIFT_CLUSTERSUBNETGROUP> = (resource) => {return {Type: "AWS::Redshift::ClusterSubnetGroup", ...resource}}
export const AWS_REDSHIFT_ENDPOINTACCESS:RESOURCE<_AWS_REDSHIFT_ENDPOINTACCESS> = (resource) => {return {Type: "AWS::Redshift::EndpointAccess", ...resource}}
export const AWS_REDSHIFT_ENDPOINTAUTHORIZATION:RESOURCE<_AWS_REDSHIFT_ENDPOINTAUTHORIZATION> = (resource) => {return {Type: "AWS::Redshift::EndpointAuthorization", ...resource}}
export const AWS_REDSHIFT_EVENTSUBSCRIPTION:RESOURCE<_AWS_REDSHIFT_EVENTSUBSCRIPTION> = (resource) => {return {Type: "AWS::Redshift::EventSubscription", ...resource}}
export const AWS_REDSHIFT_SCHEDULEDACTION:RESOURCE<_AWS_REDSHIFT_SCHEDULEDACTION> = (resource) => {return {Type: "AWS::Redshift::ScheduledAction", ...resource}}
export const AWS_REDSHIFTSERVERLESS_NAMESPACE:RESOURCE<_AWS_REDSHIFTSERVERLESS_NAMESPACE> = (resource) => {return {Type: "AWS::RedshiftServerless::Namespace", ...resource}}
export const AWS_REDSHIFTSERVERLESS_WORKGROUP:RESOURCE<_AWS_REDSHIFTSERVERLESS_WORKGROUP> = (resource) => {return {Type: "AWS::RedshiftServerless::Workgroup", ...resource}}
export const AWS_REFACTORSPACES_APPLICATION:RESOURCE<_AWS_REFACTORSPACES_APPLICATION> = (resource) => {return {Type: "AWS::RefactorSpaces::Application", ...resource}}
export const AWS_REFACTORSPACES_ENVIRONMENT:RESOURCE<_AWS_REFACTORSPACES_ENVIRONMENT> = (resource) => {return {Type: "AWS::RefactorSpaces::Environment", ...resource}}
export const AWS_REFACTORSPACES_ROUTE:RESOURCE<_AWS_REFACTORSPACES_ROUTE> = (resource) => {return {Type: "AWS::RefactorSpaces::Route", ...resource}}
export const AWS_REFACTORSPACES_SERVICE:RESOURCE<_AWS_REFACTORSPACES_SERVICE> = (resource) => {return {Type: "AWS::RefactorSpaces::Service", ...resource}}
export const AWS_REKOGNITION_COLLECTION:RESOURCE<_AWS_REKOGNITION_COLLECTION> = (resource) => {return {Type: "AWS::Rekognition::Collection", ...resource}}
export const AWS_REKOGNITION_PROJECT:RESOURCE<_AWS_REKOGNITION_PROJECT> = (resource) => {return {Type: "AWS::Rekognition::Project", ...resource}}
export const AWS_REKOGNITION_STREAMPROCESSOR:RESOURCE<_AWS_REKOGNITION_STREAMPROCESSOR> = (resource) => {return {Type: "AWS::Rekognition::StreamProcessor", ...resource}}
export const AWS_RESILIENCEHUB_APP:RESOURCE<_AWS_RESILIENCEHUB_APP> = (resource) => {return {Type: "AWS::ResilienceHub::App", ...resource}}
export const AWS_RESILIENCEHUB_RESILIENCYPOLICY:RESOURCE<_AWS_RESILIENCEHUB_RESILIENCYPOLICY> = (resource) => {return {Type: "AWS::ResilienceHub::ResiliencyPolicy", ...resource}}
export const AWS_RESOURCEEXPLORER2_DEFAULTVIEWASSOCIATION:RESOURCE<_AWS_RESOURCEEXPLORER2_DEFAULTVIEWASSOCIATION> = (resource) => {return {Type: "AWS::ResourceExplorer2::DefaultViewAssociation", ...resource}}
export const AWS_RESOURCEEXPLORER2_INDEX:RESOURCE<_AWS_RESOURCEEXPLORER2_INDEX> = (resource) => {return {Type: "AWS::ResourceExplorer2::Index", ...resource}}
export const AWS_RESOURCEEXPLORER2_VIEW:RESOURCE<_AWS_RESOURCEEXPLORER2_VIEW> = (resource) => {return {Type: "AWS::ResourceExplorer2::View", ...resource}}
export const AWS_RESOURCEGROUPS_GROUP:RESOURCE<_AWS_RESOURCEGROUPS_GROUP> = (resource) => {return {Type: "AWS::ResourceGroups::Group", ...resource}}
export const AWS_ROBOMAKER_FLEET:RESOURCE<_AWS_ROBOMAKER_FLEET> = (resource) => {return {Type: "AWS::RoboMaker::Fleet", ...resource}}
export const AWS_ROBOMAKER_ROBOT:RESOURCE<_AWS_ROBOMAKER_ROBOT> = (resource) => {return {Type: "AWS::RoboMaker::Robot", ...resource}}
export const AWS_ROBOMAKER_ROBOTAPPLICATION:RESOURCE<_AWS_ROBOMAKER_ROBOTAPPLICATION> = (resource) => {return {Type: "AWS::RoboMaker::RobotApplication", ...resource}}
export const AWS_ROBOMAKER_ROBOTAPPLICATIONVERSION:RESOURCE<_AWS_ROBOMAKER_ROBOTAPPLICATIONVERSION> = (resource) => {return {Type: "AWS::RoboMaker::RobotApplicationVersion", ...resource}}
export const AWS_ROBOMAKER_SIMULATIONAPPLICATION:RESOURCE<_AWS_ROBOMAKER_SIMULATIONAPPLICATION> = (resource) => {return {Type: "AWS::RoboMaker::SimulationApplication", ...resource}}
export const AWS_ROBOMAKER_SIMULATIONAPPLICATIONVERSION:RESOURCE<_AWS_ROBOMAKER_SIMULATIONAPPLICATIONVERSION> = (resource) => {return {Type: "AWS::RoboMaker::SimulationApplicationVersion", ...resource}}
export const AWS_ROLESANYWHERE_CRL:RESOURCE<_AWS_ROLESANYWHERE_CRL> = (resource) => {return {Type: "AWS::RolesAnywhere::CRL", ...resource}}
export const AWS_ROLESANYWHERE_PROFILE:RESOURCE<_AWS_ROLESANYWHERE_PROFILE> = (resource) => {return {Type: "AWS::RolesAnywhere::Profile", ...resource}}
export const AWS_ROLESANYWHERE_TRUSTANCHOR:RESOURCE<_AWS_ROLESANYWHERE_TRUSTANCHOR> = (resource) => {return {Type: "AWS::RolesAnywhere::TrustAnchor", ...resource}}
export const AWS_ROUTE53_CIDRCOLLECTION:RESOURCE<_AWS_ROUTE53_CIDRCOLLECTION> = (resource) => {return {Type: "AWS::Route53::CidrCollection", ...resource}}
export const AWS_ROUTE53_DNSSEC:RESOURCE<_AWS_ROUTE53_DNSSEC> = (resource) => {return {Type: "AWS::Route53::DNSSEC", ...resource}}
export const AWS_ROUTE53_HEALTHCHECK:RESOURCE<_AWS_ROUTE53_HEALTHCHECK> = (resource) => {return {Type: "AWS::Route53::HealthCheck", ...resource}}
export const AWS_ROUTE53_HOSTEDZONE:RESOURCE<_AWS_ROUTE53_HOSTEDZONE> = (resource) => {return {Type: "AWS::Route53::HostedZone", ...resource}}
export const AWS_ROUTE53_KEYSIGNINGKEY:RESOURCE<_AWS_ROUTE53_KEYSIGNINGKEY> = (resource) => {return {Type: "AWS::Route53::KeySigningKey", ...resource}}
export const AWS_ROUTE53_RECORDSET:RESOURCE<_AWS_ROUTE53_RECORDSET> = (resource) => {return {Type: "AWS::Route53::RecordSet", ...resource}}
export const AWS_ROUTE53_RECORDSETGROUP:RESOURCE<_AWS_ROUTE53_RECORDSETGROUP> = (resource) => {return {Type: "AWS::Route53::RecordSetGroup", ...resource}}
export const AWS_ROUTE53PROFILES_PROFILE:RESOURCE<_AWS_ROUTE53PROFILES_PROFILE> = (resource) => {return {Type: "AWS::Route53Profiles::Profile", ...resource}}
export const AWS_ROUTE53PROFILES_PROFILEASSOCIATION:RESOURCE<_AWS_ROUTE53PROFILES_PROFILEASSOCIATION> = (resource) => {return {Type: "AWS::Route53Profiles::ProfileAssociation", ...resource}}
export const AWS_ROUTE53PROFILES_PROFILERESOURCEASSOCIATION:RESOURCE<_AWS_ROUTE53PROFILES_PROFILERESOURCEASSOCIATION> = (resource) => {return {Type: "AWS::Route53Profiles::ProfileResourceAssociation", ...resource}}
export const AWS_ROUTE53RECOVERYCONTROL_CLUSTER:RESOURCE<_AWS_ROUTE53RECOVERYCONTROL_CLUSTER> = (resource) => {return {Type: "AWS::Route53RecoveryControl::Cluster", ...resource}}
export const AWS_ROUTE53RECOVERYCONTROL_CONTROLPANEL:RESOURCE<_AWS_ROUTE53RECOVERYCONTROL_CONTROLPANEL> = (resource) => {return {Type: "AWS::Route53RecoveryControl::ControlPanel", ...resource}}
export const AWS_ROUTE53RECOVERYCONTROL_ROUTINGCONTROL:RESOURCE<_AWS_ROUTE53RECOVERYCONTROL_ROUTINGCONTROL> = (resource) => {return {Type: "AWS::Route53RecoveryControl::RoutingControl", ...resource}}
export const AWS_ROUTE53RECOVERYCONTROL_SAFETYRULE:RESOURCE<_AWS_ROUTE53RECOVERYCONTROL_SAFETYRULE> = (resource) => {return {Type: "AWS::Route53RecoveryControl::SafetyRule", ...resource}}
export const AWS_ROUTE53RECOVERYREADINESS_CELL:RESOURCE<_AWS_ROUTE53RECOVERYREADINESS_CELL> = (resource) => {return {Type: "AWS::Route53RecoveryReadiness::Cell", ...resource}}
export const AWS_ROUTE53RECOVERYREADINESS_READINESSCHECK:RESOURCE<_AWS_ROUTE53RECOVERYREADINESS_READINESSCHECK> = (resource) => {return {Type: "AWS::Route53RecoveryReadiness::ReadinessCheck", ...resource}}
export const AWS_ROUTE53RECOVERYREADINESS_RECOVERYGROUP:RESOURCE<_AWS_ROUTE53RECOVERYREADINESS_RECOVERYGROUP> = (resource) => {return {Type: "AWS::Route53RecoveryReadiness::RecoveryGroup", ...resource}}
export const AWS_ROUTE53RECOVERYREADINESS_RESOURCESET:RESOURCE<_AWS_ROUTE53RECOVERYREADINESS_RESOURCESET> = (resource) => {return {Type: "AWS::Route53RecoveryReadiness::ResourceSet", ...resource}}
export const AWS_ROUTE53RESOLVER_FIREWALLDOMAINLIST:RESOURCE<_AWS_ROUTE53RESOLVER_FIREWALLDOMAINLIST> = (resource) => {return {Type: "AWS::Route53Resolver::FirewallDomainList", ...resource}}
export const AWS_ROUTE53RESOLVER_FIREWALLRULEGROUP:RESOURCE<_AWS_ROUTE53RESOLVER_FIREWALLRULEGROUP> = (resource) => {return {Type: "AWS::Route53Resolver::FirewallRuleGroup", ...resource}}
export const AWS_ROUTE53RESOLVER_FIREWALLRULEGROUPASSOCIATION:RESOURCE<_AWS_ROUTE53RESOLVER_FIREWALLRULEGROUPASSOCIATION> = (resource) => {return {Type: "AWS::Route53Resolver::FirewallRuleGroupAssociation", ...resource}}
export const AWS_ROUTE53RESOLVER_OUTPOSTRESOLVER:RESOURCE<_AWS_ROUTE53RESOLVER_OUTPOSTRESOLVER> = (resource) => {return {Type: "AWS::Route53Resolver::OutpostResolver", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERCONFIG:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERCONFIG> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverConfig", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERDNSSECCONFIG:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERDNSSECCONFIG> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverDNSSECConfig", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERENDPOINT:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERENDPOINT> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverEndpoint", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERQUERYLOGGINGCONFIG:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERQUERYLOGGINGCONFIG> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverQueryLoggingConfig", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERQUERYLOGGINGCONFIGASSOCIATION:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERQUERYLOGGINGCONFIGASSOCIATION> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverQueryLoggingConfigAssociation", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERRULE:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERRULE> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverRule", ...resource}}
export const AWS_ROUTE53RESOLVER_RESOLVERRULEASSOCIATION:RESOURCE<_AWS_ROUTE53RESOLVER_RESOLVERRULEASSOCIATION> = (resource) => {return {Type: "AWS::Route53Resolver::ResolverRuleAssociation", ...resource}}
export const AWS_RUM_APPMONITOR:RESOURCE<_AWS_RUM_APPMONITOR> = (resource) => {return {Type: "AWS::RUM::AppMonitor", ...resource}}
export const AWS_S3_ACCESSGRANT:RESOURCE<_AWS_S3_ACCESSGRANT> = (resource) => {return {Type: "AWS::S3::AccessGrant", ...resource}}
export const AWS_S3_ACCESSGRANTSINSTANCE:RESOURCE<_AWS_S3_ACCESSGRANTSINSTANCE> = (resource) => {return {Type: "AWS::S3::AccessGrantsInstance", ...resource}}
export const AWS_S3_ACCESSGRANTSLOCATION:RESOURCE<_AWS_S3_ACCESSGRANTSLOCATION> = (resource) => {return {Type: "AWS::S3::AccessGrantsLocation", ...resource}}
export const AWS_S3_ACCESSPOINT:RESOURCE<_AWS_S3_ACCESSPOINT> = (resource) => {return {Type: "AWS::S3::AccessPoint", ...resource}}
export const AWS_S3_BUCKET:RESOURCE<_AWS_S3_BUCKET> = (resource) => {return {Type: "AWS::S3::Bucket", ...resource}}
export const AWS_S3_BUCKETPOLICY:RESOURCE<_AWS_S3_BUCKETPOLICY> = (resource) => {return {Type: "AWS::S3::BucketPolicy", ...resource}}
export const AWS_S3_MULTIREGIONACCESSPOINT:RESOURCE<_AWS_S3_MULTIREGIONACCESSPOINT> = (resource) => {return {Type: "AWS::S3::MultiRegionAccessPoint", ...resource}}
export const AWS_S3_MULTIREGIONACCESSPOINTPOLICY:RESOURCE<_AWS_S3_MULTIREGIONACCESSPOINTPOLICY> = (resource) => {return {Type: "AWS::S3::MultiRegionAccessPointPolicy", ...resource}}
export const AWS_S3_STORAGELENS:RESOURCE<_AWS_S3_STORAGELENS> = (resource) => {return {Type: "AWS::S3::StorageLens", ...resource}}
export const AWS_S3_STORAGELENSGROUP:RESOURCE<_AWS_S3_STORAGELENSGROUP> = (resource) => {return {Type: "AWS::S3::StorageLensGroup", ...resource}}
export const AWS_S3EXPRESS_BUCKETPOLICY:RESOURCE<_AWS_S3EXPRESS_BUCKETPOLICY> = (resource) => {return {Type: "AWS::S3Express::BucketPolicy", ...resource}}
export const AWS_S3EXPRESS_DIRECTORYBUCKET:RESOURCE<_AWS_S3EXPRESS_DIRECTORYBUCKET> = (resource) => {return {Type: "AWS::S3Express::DirectoryBucket", ...resource}}
export const AWS_S3OBJECTLAMBDA_ACCESSPOINT:RESOURCE<_AWS_S3OBJECTLAMBDA_ACCESSPOINT> = (resource) => {return {Type: "AWS::S3ObjectLambda::AccessPoint", ...resource}}
export const AWS_S3OBJECTLAMBDA_ACCESSPOINTPOLICY:RESOURCE<_AWS_S3OBJECTLAMBDA_ACCESSPOINTPOLICY> = (resource) => {return {Type: "AWS::S3ObjectLambda::AccessPointPolicy", ...resource}}
export const AWS_S3OUTPOSTS_ACCESSPOINT:RESOURCE<_AWS_S3OUTPOSTS_ACCESSPOINT> = (resource) => {return {Type: "AWS::S3Outposts::AccessPoint", ...resource}}
export const AWS_S3OUTPOSTS_BUCKET:RESOURCE<_AWS_S3OUTPOSTS_BUCKET> = (resource) => {return {Type: "AWS::S3Outposts::Bucket", ...resource}}
export const AWS_S3OUTPOSTS_BUCKETPOLICY:RESOURCE<_AWS_S3OUTPOSTS_BUCKETPOLICY> = (resource) => {return {Type: "AWS::S3Outposts::BucketPolicy", ...resource}}
export const AWS_S3OUTPOSTS_ENDPOINT:RESOURCE<_AWS_S3OUTPOSTS_ENDPOINT> = (resource) => {return {Type: "AWS::S3Outposts::Endpoint", ...resource}}
export const AWS_SAGEMAKER_APP:RESOURCE<_AWS_SAGEMAKER_APP> = (resource) => {return {Type: "AWS::SageMaker::App", ...resource}}
export const AWS_SAGEMAKER_APPIMAGECONFIG:RESOURCE<_AWS_SAGEMAKER_APPIMAGECONFIG> = (resource) => {return {Type: "AWS::SageMaker::AppImageConfig", ...resource}}
export const AWS_SAGEMAKER_CLUSTER:RESOURCE<_AWS_SAGEMAKER_CLUSTER> = (resource) => {return {Type: "AWS::SageMaker::Cluster", ...resource}}
export const AWS_SAGEMAKER_CODEREPOSITORY:RESOURCE<_AWS_SAGEMAKER_CODEREPOSITORY> = (resource) => {return {Type: "AWS::SageMaker::CodeRepository", ...resource}}
export const AWS_SAGEMAKER_DATAQUALITYJOBDEFINITION:RESOURCE<_AWS_SAGEMAKER_DATAQUALITYJOBDEFINITION> = (resource) => {return {Type: "AWS::SageMaker::DataQualityJobDefinition", ...resource}}
export const AWS_SAGEMAKER_DEVICE:RESOURCE<_AWS_SAGEMAKER_DEVICE> = (resource) => {return {Type: "AWS::SageMaker::Device", ...resource}}
export const AWS_SAGEMAKER_DEVICEFLEET:RESOURCE<_AWS_SAGEMAKER_DEVICEFLEET> = (resource) => {return {Type: "AWS::SageMaker::DeviceFleet", ...resource}}
export const AWS_SAGEMAKER_DOMAIN:RESOURCE<_AWS_SAGEMAKER_DOMAIN> = (resource) => {return {Type: "AWS::SageMaker::Domain", ...resource}}
export const AWS_SAGEMAKER_ENDPOINT:RESOURCE<_AWS_SAGEMAKER_ENDPOINT> = (resource) => {return {Type: "AWS::SageMaker::Endpoint", ...resource}}
export const AWS_SAGEMAKER_ENDPOINTCONFIG:RESOURCE<_AWS_SAGEMAKER_ENDPOINTCONFIG> = (resource) => {return {Type: "AWS::SageMaker::EndpointConfig", ...resource}}
export const AWS_SAGEMAKER_FEATUREGROUP:RESOURCE<_AWS_SAGEMAKER_FEATUREGROUP> = (resource) => {return {Type: "AWS::SageMaker::FeatureGroup", ...resource}}
export const AWS_SAGEMAKER_IMAGE:RESOURCE<_AWS_SAGEMAKER_IMAGE> = (resource) => {return {Type: "AWS::SageMaker::Image", ...resource}}
export const AWS_SAGEMAKER_IMAGEVERSION:RESOURCE<_AWS_SAGEMAKER_IMAGEVERSION> = (resource) => {return {Type: "AWS::SageMaker::ImageVersion", ...resource}}
export const AWS_SAGEMAKER_INFERENCECOMPONENT:RESOURCE<_AWS_SAGEMAKER_INFERENCECOMPONENT> = (resource) => {return {Type: "AWS::SageMaker::InferenceComponent", ...resource}}
export const AWS_SAGEMAKER_INFERENCEEXPERIMENT:RESOURCE<_AWS_SAGEMAKER_INFERENCEEXPERIMENT> = (resource) => {return {Type: "AWS::SageMaker::InferenceExperiment", ...resource}}
export const AWS_SAGEMAKER_MLFLOWTRACKINGSERVER:RESOURCE<_AWS_SAGEMAKER_MLFLOWTRACKINGSERVER> = (resource) => {return {Type: "AWS::SageMaker::MlflowTrackingServer", ...resource}}
export const AWS_SAGEMAKER_MODEL:RESOURCE<_AWS_SAGEMAKER_MODEL> = (resource) => {return {Type: "AWS::SageMaker::Model", ...resource}}
export const AWS_SAGEMAKER_MODELBIASJOBDEFINITION:RESOURCE<_AWS_SAGEMAKER_MODELBIASJOBDEFINITION> = (resource) => {return {Type: "AWS::SageMaker::ModelBiasJobDefinition", ...resource}}
export const AWS_SAGEMAKER_MODELCARD:RESOURCE<_AWS_SAGEMAKER_MODELCARD> = (resource) => {return {Type: "AWS::SageMaker::ModelCard", ...resource}}
export const AWS_SAGEMAKER_MODELEXPLAINABILITYJOBDEFINITION:RESOURCE<_AWS_SAGEMAKER_MODELEXPLAINABILITYJOBDEFINITION> = (resource) => {return {Type: "AWS::SageMaker::ModelExplainabilityJobDefinition", ...resource}}
export const AWS_SAGEMAKER_MODELPACKAGE:RESOURCE<_AWS_SAGEMAKER_MODELPACKAGE> = (resource) => {return {Type: "AWS::SageMaker::ModelPackage", ...resource}}
export const AWS_SAGEMAKER_MODELPACKAGEGROUP:RESOURCE<_AWS_SAGEMAKER_MODELPACKAGEGROUP> = (resource) => {return {Type: "AWS::SageMaker::ModelPackageGroup", ...resource}}
export const AWS_SAGEMAKER_MODELQUALITYJOBDEFINITION:RESOURCE<_AWS_SAGEMAKER_MODELQUALITYJOBDEFINITION> = (resource) => {return {Type: "AWS::SageMaker::ModelQualityJobDefinition", ...resource}}
export const AWS_SAGEMAKER_MONITORINGSCHEDULE:RESOURCE<_AWS_SAGEMAKER_MONITORINGSCHEDULE> = (resource) => {return {Type: "AWS::SageMaker::MonitoringSchedule", ...resource}}
export const AWS_SAGEMAKER_NOTEBOOKINSTANCE:RESOURCE<_AWS_SAGEMAKER_NOTEBOOKINSTANCE> = (resource) => {return {Type: "AWS::SageMaker::NotebookInstance", ...resource}}
export const AWS_SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIG:RESOURCE<_AWS_SAGEMAKER_NOTEBOOKINSTANCELIFECYCLECONFIG> = (resource) => {return {Type: "AWS::SageMaker::NotebookInstanceLifecycleConfig", ...resource}}
export const AWS_SAGEMAKER_PIPELINE:RESOURCE<_AWS_SAGEMAKER_PIPELINE> = (resource) => {return {Type: "AWS::SageMaker::Pipeline", ...resource}}
export const AWS_SAGEMAKER_PROJECT:RESOURCE<_AWS_SAGEMAKER_PROJECT> = (resource) => {return {Type: "AWS::SageMaker::Project", ...resource}}
export const AWS_SAGEMAKER_SPACE:RESOURCE<_AWS_SAGEMAKER_SPACE> = (resource) => {return {Type: "AWS::SageMaker::Space", ...resource}}
export const AWS_SAGEMAKER_STUDIOLIFECYCLECONFIG:RESOURCE<_AWS_SAGEMAKER_STUDIOLIFECYCLECONFIG> = (resource) => {return {Type: "AWS::SageMaker::StudioLifecycleConfig", ...resource}}
export const AWS_SAGEMAKER_USERPROFILE:RESOURCE<_AWS_SAGEMAKER_USERPROFILE> = (resource) => {return {Type: "AWS::SageMaker::UserProfile", ...resource}}
export const AWS_SAGEMAKER_WORKTEAM:RESOURCE<_AWS_SAGEMAKER_WORKTEAM> = (resource) => {return {Type: "AWS::SageMaker::Workteam", ...resource}}
export const AWS_SCHEDULER_SCHEDULE:RESOURCE<_AWS_SCHEDULER_SCHEDULE> = (resource) => {return {Type: "AWS::Scheduler::Schedule", ...resource}}
export const AWS_SCHEDULER_SCHEDULEGROUP:RESOURCE<_AWS_SCHEDULER_SCHEDULEGROUP> = (resource) => {return {Type: "AWS::Scheduler::ScheduleGroup", ...resource}}
export const AWS_SDB_DOMAIN:RESOURCE<_AWS_SDB_DOMAIN> = (resource) => {return {Type: "AWS::SDB::Domain", ...resource}}
export const AWS_SECRETSMANAGER_RESOURCEPOLICY:RESOURCE<_AWS_SECRETSMANAGER_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::SecretsManager::ResourcePolicy", ...resource}}
export const AWS_SECRETSMANAGER_ROTATIONSCHEDULE:RESOURCE<_AWS_SECRETSMANAGER_ROTATIONSCHEDULE> = (resource) => {return {Type: "AWS::SecretsManager::RotationSchedule", ...resource}}
export const AWS_SECRETSMANAGER_SECRET:RESOURCE<_AWS_SECRETSMANAGER_SECRET> = (resource) => {return {Type: "AWS::SecretsManager::Secret", ...resource}}
export const AWS_SECRETSMANAGER_SECRETTARGETATTACHMENT:RESOURCE<_AWS_SECRETSMANAGER_SECRETTARGETATTACHMENT> = (resource) => {return {Type: "AWS::SecretsManager::SecretTargetAttachment", ...resource}}
export const AWS_SECURITYHUB_AUTOMATIONRULE:RESOURCE<_AWS_SECURITYHUB_AUTOMATIONRULE> = (resource) => {return {Type: "AWS::SecurityHub::AutomationRule", ...resource}}
export const AWS_SECURITYHUB_CONFIGURATIONPOLICY:RESOURCE<_AWS_SECURITYHUB_CONFIGURATIONPOLICY> = (resource) => {return {Type: "AWS::SecurityHub::ConfigurationPolicy", ...resource}}
export const AWS_SECURITYHUB_DELEGATEDADMIN:RESOURCE<_AWS_SECURITYHUB_DELEGATEDADMIN> = (resource) => {return {Type: "AWS::SecurityHub::DelegatedAdmin", ...resource}}
export const AWS_SECURITYHUB_FINDINGAGGREGATOR:RESOURCE<_AWS_SECURITYHUB_FINDINGAGGREGATOR> = (resource) => {return {Type: "AWS::SecurityHub::FindingAggregator", ...resource}}
export const AWS_SECURITYHUB_HUB:RESOURCE<_AWS_SECURITYHUB_HUB> = (resource) => {return {Type: "AWS::SecurityHub::Hub", ...resource}}
export const AWS_SECURITYHUB_INSIGHT:RESOURCE<_AWS_SECURITYHUB_INSIGHT> = (resource) => {return {Type: "AWS::SecurityHub::Insight", ...resource}}
export const AWS_SECURITYHUB_ORGANIZATIONCONFIGURATION:RESOURCE<_AWS_SECURITYHUB_ORGANIZATIONCONFIGURATION> = (resource) => {return {Type: "AWS::SecurityHub::OrganizationConfiguration", ...resource}}
export const AWS_SECURITYHUB_POLICYASSOCIATION:RESOURCE<_AWS_SECURITYHUB_POLICYASSOCIATION> = (resource) => {return {Type: "AWS::SecurityHub::PolicyAssociation", ...resource}}
export const AWS_SECURITYHUB_PRODUCTSUBSCRIPTION:RESOURCE<_AWS_SECURITYHUB_PRODUCTSUBSCRIPTION> = (resource) => {return {Type: "AWS::SecurityHub::ProductSubscription", ...resource}}
export const AWS_SECURITYHUB_SECURITYCONTROL:RESOURCE<_AWS_SECURITYHUB_SECURITYCONTROL> = (resource) => {return {Type: "AWS::SecurityHub::SecurityControl", ...resource}}
export const AWS_SECURITYHUB_STANDARD:RESOURCE<_AWS_SECURITYHUB_STANDARD> = (resource) => {return {Type: "AWS::SecurityHub::Standard", ...resource}}
export const AWS_SECURITYLAKE_AWSLOGSOURCE:RESOURCE<_AWS_SECURITYLAKE_AWSLOGSOURCE> = (resource) => {return {Type: "AWS::SecurityLake::AwsLogSource", ...resource}}
export const AWS_SECURITYLAKE_DATALAKE:RESOURCE<_AWS_SECURITYLAKE_DATALAKE> = (resource) => {return {Type: "AWS::SecurityLake::DataLake", ...resource}}
export const AWS_SECURITYLAKE_SUBSCRIBER:RESOURCE<_AWS_SECURITYLAKE_SUBSCRIBER> = (resource) => {return {Type: "AWS::SecurityLake::Subscriber", ...resource}}
export const AWS_SECURITYLAKE_SUBSCRIBERNOTIFICATION:RESOURCE<_AWS_SECURITYLAKE_SUBSCRIBERNOTIFICATION> = (resource) => {return {Type: "AWS::SecurityLake::SubscriberNotification", ...resource}}
export const AWS_SERVICECATALOG_ACCEPTEDPORTFOLIOSHARE:RESOURCE<_AWS_SERVICECATALOG_ACCEPTEDPORTFOLIOSHARE> = (resource) => {return {Type: "AWS::ServiceCatalog::AcceptedPortfolioShare", ...resource}}
export const AWS_SERVICECATALOG_CLOUDFORMATIONPRODUCT:RESOURCE<_AWS_SERVICECATALOG_CLOUDFORMATIONPRODUCT> = (resource) => {return {Type: "AWS::ServiceCatalog::CloudFormationProduct", ...resource}}
export const AWS_SERVICECATALOG_CLOUDFORMATIONPROVISIONEDPRODUCT:RESOURCE<_AWS_SERVICECATALOG_CLOUDFORMATIONPROVISIONEDPRODUCT> = (resource) => {return {Type: "AWS::ServiceCatalog::CloudFormationProvisionedProduct", ...resource}}
export const AWS_SERVICECATALOG_LAUNCHNOTIFICATIONCONSTRAINT:RESOURCE<_AWS_SERVICECATALOG_LAUNCHNOTIFICATIONCONSTRAINT> = (resource) => {return {Type: "AWS::ServiceCatalog::LaunchNotificationConstraint", ...resource}}
export const AWS_SERVICECATALOG_LAUNCHROLECONSTRAINT:RESOURCE<_AWS_SERVICECATALOG_LAUNCHROLECONSTRAINT> = (resource) => {return {Type: "AWS::ServiceCatalog::LaunchRoleConstraint", ...resource}}
export const AWS_SERVICECATALOG_LAUNCHTEMPLATECONSTRAINT:RESOURCE<_AWS_SERVICECATALOG_LAUNCHTEMPLATECONSTRAINT> = (resource) => {return {Type: "AWS::ServiceCatalog::LaunchTemplateConstraint", ...resource}}
export const AWS_SERVICECATALOG_PORTFOLIO:RESOURCE<_AWS_SERVICECATALOG_PORTFOLIO> = (resource) => {return {Type: "AWS::ServiceCatalog::Portfolio", ...resource}}
export const AWS_SERVICECATALOG_PORTFOLIOPRINCIPALASSOCIATION:RESOURCE<_AWS_SERVICECATALOG_PORTFOLIOPRINCIPALASSOCIATION> = (resource) => {return {Type: "AWS::ServiceCatalog::PortfolioPrincipalAssociation", ...resource}}
export const AWS_SERVICECATALOG_PORTFOLIOPRODUCTASSOCIATION:RESOURCE<_AWS_SERVICECATALOG_PORTFOLIOPRODUCTASSOCIATION> = (resource) => {return {Type: "AWS::ServiceCatalog::PortfolioProductAssociation", ...resource}}
export const AWS_SERVICECATALOG_PORTFOLIOSHARE:RESOURCE<_AWS_SERVICECATALOG_PORTFOLIOSHARE> = (resource) => {return {Type: "AWS::ServiceCatalog::PortfolioShare", ...resource}}
export const AWS_SERVICECATALOG_RESOURCEUPDATECONSTRAINT:RESOURCE<_AWS_SERVICECATALOG_RESOURCEUPDATECONSTRAINT> = (resource) => {return {Type: "AWS::ServiceCatalog::ResourceUpdateConstraint", ...resource}}
export const AWS_SERVICECATALOG_SERVICEACTION:RESOURCE<_AWS_SERVICECATALOG_SERVICEACTION> = (resource) => {return {Type: "AWS::ServiceCatalog::ServiceAction", ...resource}}
export const AWS_SERVICECATALOG_SERVICEACTIONASSOCIATION:RESOURCE<_AWS_SERVICECATALOG_SERVICEACTIONASSOCIATION> = (resource) => {return {Type: "AWS::ServiceCatalog::ServiceActionAssociation", ...resource}}
export const AWS_SERVICECATALOG_STACKSETCONSTRAINT:RESOURCE<_AWS_SERVICECATALOG_STACKSETCONSTRAINT> = (resource) => {return {Type: "AWS::ServiceCatalog::StackSetConstraint", ...resource}}
export const AWS_SERVICECATALOG_TAGOPTION:RESOURCE<_AWS_SERVICECATALOG_TAGOPTION> = (resource) => {return {Type: "AWS::ServiceCatalog::TagOption", ...resource}}
export const AWS_SERVICECATALOG_TAGOPTIONASSOCIATION:RESOURCE<_AWS_SERVICECATALOG_TAGOPTIONASSOCIATION> = (resource) => {return {Type: "AWS::ServiceCatalog::TagOptionAssociation", ...resource}}
export const AWS_SERVICECATALOGAPPREGISTRY_APPLICATION:RESOURCE<_AWS_SERVICECATALOGAPPREGISTRY_APPLICATION> = (resource) => {return {Type: "AWS::ServiceCatalogAppRegistry::Application", ...resource}}
export const AWS_SERVICECATALOGAPPREGISTRY_ATTRIBUTEGROUP:RESOURCE<_AWS_SERVICECATALOGAPPREGISTRY_ATTRIBUTEGROUP> = (resource) => {return {Type: "AWS::ServiceCatalogAppRegistry::AttributeGroup", ...resource}}
export const AWS_SERVICECATALOGAPPREGISTRY_ATTRIBUTEGROUPASSOCIATION:RESOURCE<_AWS_SERVICECATALOGAPPREGISTRY_ATTRIBUTEGROUPASSOCIATION> = (resource) => {return {Type: "AWS::ServiceCatalogAppRegistry::AttributeGroupAssociation", ...resource}}
export const AWS_SERVICECATALOGAPPREGISTRY_RESOURCEASSOCIATION:RESOURCE<_AWS_SERVICECATALOGAPPREGISTRY_RESOURCEASSOCIATION> = (resource) => {return {Type: "AWS::ServiceCatalogAppRegistry::ResourceAssociation", ...resource}}
export const AWS_SERVICEDISCOVERY_HTTPNAMESPACE:RESOURCE<_AWS_SERVICEDISCOVERY_HTTPNAMESPACE> = (resource) => {return {Type: "AWS::ServiceDiscovery::HttpNamespace", ...resource}}
export const AWS_SERVICEDISCOVERY_INSTANCE:RESOURCE<_AWS_SERVICEDISCOVERY_INSTANCE> = (resource) => {return {Type: "AWS::ServiceDiscovery::Instance", ...resource}}
export const AWS_SERVICEDISCOVERY_PRIVATEDNSNAMESPACE:RESOURCE<_AWS_SERVICEDISCOVERY_PRIVATEDNSNAMESPACE> = (resource) => {return {Type: "AWS::ServiceDiscovery::PrivateDnsNamespace", ...resource}}
export const AWS_SERVICEDISCOVERY_PUBLICDNSNAMESPACE:RESOURCE<_AWS_SERVICEDISCOVERY_PUBLICDNSNAMESPACE> = (resource) => {return {Type: "AWS::ServiceDiscovery::PublicDnsNamespace", ...resource}}
export const AWS_SERVICEDISCOVERY_SERVICE:RESOURCE<_AWS_SERVICEDISCOVERY_SERVICE> = (resource) => {return {Type: "AWS::ServiceDiscovery::Service", ...resource}}
export const AWS_SES_CONFIGURATIONSET:RESOURCE<_AWS_SES_CONFIGURATIONSET> = (resource) => {return {Type: "AWS::SES::ConfigurationSet", ...resource}}
export const AWS_SES_CONFIGURATIONSETEVENTDESTINATION:RESOURCE<_AWS_SES_CONFIGURATIONSETEVENTDESTINATION> = (resource) => {return {Type: "AWS::SES::ConfigurationSetEventDestination", ...resource}}
export const AWS_SES_CONTACTLIST:RESOURCE<_AWS_SES_CONTACTLIST> = (resource) => {return {Type: "AWS::SES::ContactList", ...resource}}
export const AWS_SES_DEDICATEDIPPOOL:RESOURCE<_AWS_SES_DEDICATEDIPPOOL> = (resource) => {return {Type: "AWS::SES::DedicatedIpPool", ...resource}}
export const AWS_SES_EMAILIDENTITY:RESOURCE<_AWS_SES_EMAILIDENTITY> = (resource) => {return {Type: "AWS::SES::EmailIdentity", ...resource}}
export const AWS_SES_MAILMANAGERADDONINSTANCE:RESOURCE<_AWS_SES_MAILMANAGERADDONINSTANCE> = (resource) => {return {Type: "AWS::SES::MailManagerAddonInstance", ...resource}}
export const AWS_SES_MAILMANAGERADDONSUBSCRIPTION:RESOURCE<_AWS_SES_MAILMANAGERADDONSUBSCRIPTION> = (resource) => {return {Type: "AWS::SES::MailManagerAddonSubscription", ...resource}}
export const AWS_SES_MAILMANAGERARCHIVE:RESOURCE<_AWS_SES_MAILMANAGERARCHIVE> = (resource) => {return {Type: "AWS::SES::MailManagerArchive", ...resource}}
export const AWS_SES_MAILMANAGERINGRESSPOINT:RESOURCE<_AWS_SES_MAILMANAGERINGRESSPOINT> = (resource) => {return {Type: "AWS::SES::MailManagerIngressPoint", ...resource}}
export const AWS_SES_MAILMANAGERRELAY:RESOURCE<_AWS_SES_MAILMANAGERRELAY> = (resource) => {return {Type: "AWS::SES::MailManagerRelay", ...resource}}
export const AWS_SES_MAILMANAGERRULESET:RESOURCE<_AWS_SES_MAILMANAGERRULESET> = (resource) => {return {Type: "AWS::SES::MailManagerRuleSet", ...resource}}
export const AWS_SES_MAILMANAGERTRAFFICPOLICY:RESOURCE<_AWS_SES_MAILMANAGERTRAFFICPOLICY> = (resource) => {return {Type: "AWS::SES::MailManagerTrafficPolicy", ...resource}}
export const AWS_SES_RECEIPTFILTER:RESOURCE<_AWS_SES_RECEIPTFILTER> = (resource) => {return {Type: "AWS::SES::ReceiptFilter", ...resource}}
export const AWS_SES_RECEIPTRULE:RESOURCE<_AWS_SES_RECEIPTRULE> = (resource) => {return {Type: "AWS::SES::ReceiptRule", ...resource}}
export const AWS_SES_RECEIPTRULESET:RESOURCE<_AWS_SES_RECEIPTRULESET> = (resource) => {return {Type: "AWS::SES::ReceiptRuleSet", ...resource}}
export const AWS_SES_TEMPLATE:RESOURCE<_AWS_SES_TEMPLATE> = (resource) => {return {Type: "AWS::SES::Template", ...resource}}
export const AWS_SES_VDMATTRIBUTES:RESOURCE<_AWS_SES_VDMATTRIBUTES> = (resource) => {return {Type: "AWS::SES::VdmAttributes", ...resource}}
export const AWS_SHIELD_DRTACCESS:RESOURCE<_AWS_SHIELD_DRTACCESS> = (resource) => {return {Type: "AWS::Shield::DRTAccess", ...resource}}
export const AWS_SHIELD_PROACTIVEENGAGEMENT:RESOURCE<_AWS_SHIELD_PROACTIVEENGAGEMENT> = (resource) => {return {Type: "AWS::Shield::ProactiveEngagement", ...resource}}
export const AWS_SHIELD_PROTECTION:RESOURCE<_AWS_SHIELD_PROTECTION> = (resource) => {return {Type: "AWS::Shield::Protection", ...resource}}
export const AWS_SHIELD_PROTECTIONGROUP:RESOURCE<_AWS_SHIELD_PROTECTIONGROUP> = (resource) => {return {Type: "AWS::Shield::ProtectionGroup", ...resource}}
export const AWS_SIGNER_PROFILEPERMISSION:RESOURCE<_AWS_SIGNER_PROFILEPERMISSION> = (resource) => {return {Type: "AWS::Signer::ProfilePermission", ...resource}}
export const AWS_SIGNER_SIGNINGPROFILE:RESOURCE<_AWS_SIGNER_SIGNINGPROFILE> = (resource) => {return {Type: "AWS::Signer::SigningProfile", ...resource}}
export const AWS_SIMSPACEWEAVER_SIMULATION:RESOURCE<_AWS_SIMSPACEWEAVER_SIMULATION> = (resource) => {return {Type: "AWS::SimSpaceWeaver::Simulation", ...resource}}
export const AWS_SNS_SUBSCRIPTION:RESOURCE<_AWS_SNS_SUBSCRIPTION> = (resource) => {return {Type: "AWS::SNS::Subscription", ...resource}}
export const AWS_SNS_TOPIC:RESOURCE<_AWS_SNS_TOPIC> = (resource) => {return {Type: "AWS::SNS::Topic", ...resource}}
export const AWS_SNS_TOPICINLINEPOLICY:RESOURCE<_AWS_SNS_TOPICINLINEPOLICY> = (resource) => {return {Type: "AWS::SNS::TopicInlinePolicy", ...resource}}
export const AWS_SNS_TOPICPOLICY:RESOURCE<_AWS_SNS_TOPICPOLICY> = (resource) => {return {Type: "AWS::SNS::TopicPolicy", ...resource}}
export const AWS_SQS_QUEUE:RESOURCE<_AWS_SQS_QUEUE> = (resource) => {return {Type: "AWS::SQS::Queue", ...resource}}
export const AWS_SQS_QUEUEINLINEPOLICY:RESOURCE<_AWS_SQS_QUEUEINLINEPOLICY> = (resource) => {return {Type: "AWS::SQS::QueueInlinePolicy", ...resource}}
export const AWS_SQS_QUEUEPOLICY:RESOURCE<_AWS_SQS_QUEUEPOLICY> = (resource) => {return {Type: "AWS::SQS::QueuePolicy", ...resource}}
export const AWS_SSM_ASSOCIATION:RESOURCE<_AWS_SSM_ASSOCIATION> = (resource) => {return {Type: "AWS::SSM::Association", ...resource}}
export const AWS_SSM_DOCUMENT:RESOURCE<_AWS_SSM_DOCUMENT> = (resource) => {return {Type: "AWS::SSM::Document", ...resource}}
export const AWS_SSM_MAINTENANCEWINDOW:RESOURCE<_AWS_SSM_MAINTENANCEWINDOW> = (resource) => {return {Type: "AWS::SSM::MaintenanceWindow", ...resource}}
export const AWS_SSM_MAINTENANCEWINDOWTARGET:RESOURCE<_AWS_SSM_MAINTENANCEWINDOWTARGET> = (resource) => {return {Type: "AWS::SSM::MaintenanceWindowTarget", ...resource}}
export const AWS_SSM_MAINTENANCEWINDOWTASK:RESOURCE<_AWS_SSM_MAINTENANCEWINDOWTASK> = (resource) => {return {Type: "AWS::SSM::MaintenanceWindowTask", ...resource}}
export const AWS_SSM_PARAMETER:RESOURCE<_AWS_SSM_PARAMETER> = (resource) => {return {Type: "AWS::SSM::Parameter", ...resource}}
export const AWS_SSM_PATCHBASELINE:RESOURCE<_AWS_SSM_PATCHBASELINE> = (resource) => {return {Type: "AWS::SSM::PatchBaseline", ...resource}}
export const AWS_SSM_RESOURCEDATASYNC:RESOURCE<_AWS_SSM_RESOURCEDATASYNC> = (resource) => {return {Type: "AWS::SSM::ResourceDataSync", ...resource}}
export const AWS_SSM_RESOURCEPOLICY:RESOURCE<_AWS_SSM_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::SSM::ResourcePolicy", ...resource}}
export const AWS_SSMCONTACTS_CONTACT:RESOURCE<_AWS_SSMCONTACTS_CONTACT> = (resource) => {return {Type: "AWS::SSMContacts::Contact", ...resource}}
export const AWS_SSMCONTACTS_CONTACTCHANNEL:RESOURCE<_AWS_SSMCONTACTS_CONTACTCHANNEL> = (resource) => {return {Type: "AWS::SSMContacts::ContactChannel", ...resource}}
export const AWS_SSMCONTACTS_PLAN:RESOURCE<_AWS_SSMCONTACTS_PLAN> = (resource) => {return {Type: "AWS::SSMContacts::Plan", ...resource}}
export const AWS_SSMCONTACTS_ROTATION:RESOURCE<_AWS_SSMCONTACTS_ROTATION> = (resource) => {return {Type: "AWS::SSMContacts::Rotation", ...resource}}
export const AWS_SSMINCIDENTS_REPLICATIONSET:RESOURCE<_AWS_SSMINCIDENTS_REPLICATIONSET> = (resource) => {return {Type: "AWS::SSMIncidents::ReplicationSet", ...resource}}
export const AWS_SSMINCIDENTS_RESPONSEPLAN:RESOURCE<_AWS_SSMINCIDENTS_RESPONSEPLAN> = (resource) => {return {Type: "AWS::SSMIncidents::ResponsePlan", ...resource}}
export const AWS_SSMQUICKSETUP_CONFIGURATIONMANAGER:RESOURCE<_AWS_SSMQUICKSETUP_CONFIGURATIONMANAGER> = (resource) => {return {Type: "AWS::SSMQuickSetup::ConfigurationManager", ...resource}}
export const AWS_SSO_APPLICATION:RESOURCE<_AWS_SSO_APPLICATION> = (resource) => {return {Type: "AWS::SSO::Application", ...resource}}
export const AWS_SSO_APPLICATIONASSIGNMENT:RESOURCE<_AWS_SSO_APPLICATIONASSIGNMENT> = (resource) => {return {Type: "AWS::SSO::ApplicationAssignment", ...resource}}
export const AWS_SSO_ASSIGNMENT:RESOURCE<_AWS_SSO_ASSIGNMENT> = (resource) => {return {Type: "AWS::SSO::Assignment", ...resource}}
export const AWS_SSO_INSTANCE:RESOURCE<_AWS_SSO_INSTANCE> = (resource) => {return {Type: "AWS::SSO::Instance", ...resource}}
export const AWS_SSO_INSTANCEACCESSCONTROLATTRIBUTECONFIGURATION:RESOURCE<_AWS_SSO_INSTANCEACCESSCONTROLATTRIBUTECONFIGURATION> = (resource) => {return {Type: "AWS::SSO::InstanceAccessControlAttributeConfiguration", ...resource}}
export const AWS_SSO_PERMISSIONSET:RESOURCE<_AWS_SSO_PERMISSIONSET> = (resource) => {return {Type: "AWS::SSO::PermissionSet", ...resource}}
export const AWS_STEPFUNCTIONS_ACTIVITY:RESOURCE<_AWS_STEPFUNCTIONS_ACTIVITY> = (resource) => {return {Type: "AWS::StepFunctions::Activity", ...resource}}
export const AWS_STEPFUNCTIONS_STATEMACHINE:RESOURCE<_AWS_STEPFUNCTIONS_STATEMACHINE> = (resource) => {return {Type: "AWS::StepFunctions::StateMachine", ...resource}}
export const AWS_STEPFUNCTIONS_STATEMACHINEALIAS:RESOURCE<_AWS_STEPFUNCTIONS_STATEMACHINEALIAS> = (resource) => {return {Type: "AWS::StepFunctions::StateMachineAlias", ...resource}}
export const AWS_STEPFUNCTIONS_STATEMACHINEVERSION:RESOURCE<_AWS_STEPFUNCTIONS_STATEMACHINEVERSION> = (resource) => {return {Type: "AWS::StepFunctions::StateMachineVersion", ...resource}}
export const AWS_SUPPORTAPP_ACCOUNTALIAS:RESOURCE<_AWS_SUPPORTAPP_ACCOUNTALIAS> = (resource) => {return {Type: "AWS::SupportApp::AccountAlias", ...resource}}
export const AWS_SUPPORTAPP_SLACKCHANNELCONFIGURATION:RESOURCE<_AWS_SUPPORTAPP_SLACKCHANNELCONFIGURATION> = (resource) => {return {Type: "AWS::SupportApp::SlackChannelConfiguration", ...resource}}
export const AWS_SUPPORTAPP_SLACKWORKSPACECONFIGURATION:RESOURCE<_AWS_SUPPORTAPP_SLACKWORKSPACECONFIGURATION> = (resource) => {return {Type: "AWS::SupportApp::SlackWorkspaceConfiguration", ...resource}}
export const AWS_SYNTHETICS_CANARY:RESOURCE<_AWS_SYNTHETICS_CANARY> = (resource) => {return {Type: "AWS::Synthetics::Canary", ...resource}}
export const AWS_SYNTHETICS_GROUP:RESOURCE<_AWS_SYNTHETICS_GROUP> = (resource) => {return {Type: "AWS::Synthetics::Group", ...resource}}
export const AWS_SYSTEMSMANAGERSAP_APPLICATION:RESOURCE<_AWS_SYSTEMSMANAGERSAP_APPLICATION> = (resource) => {return {Type: "AWS::SystemsManagerSAP::Application", ...resource}}
export const AWS_TIMESTREAM_DATABASE:RESOURCE<_AWS_TIMESTREAM_DATABASE> = (resource) => {return {Type: "AWS::Timestream::Database", ...resource}}
export const AWS_TIMESTREAM_INFLUXDBINSTANCE:RESOURCE<_AWS_TIMESTREAM_INFLUXDBINSTANCE> = (resource) => {return {Type: "AWS::Timestream::InfluxDBInstance", ...resource}}
export const AWS_TIMESTREAM_SCHEDULEDQUERY:RESOURCE<_AWS_TIMESTREAM_SCHEDULEDQUERY> = (resource) => {return {Type: "AWS::Timestream::ScheduledQuery", ...resource}}
export const AWS_TIMESTREAM_TABLE:RESOURCE<_AWS_TIMESTREAM_TABLE> = (resource) => {return {Type: "AWS::Timestream::Table", ...resource}}
export const AWS_TRANSFER_AGREEMENT:RESOURCE<_AWS_TRANSFER_AGREEMENT> = (resource) => {return {Type: "AWS::Transfer::Agreement", ...resource}}
export const AWS_TRANSFER_CERTIFICATE:RESOURCE<_AWS_TRANSFER_CERTIFICATE> = (resource) => {return {Type: "AWS::Transfer::Certificate", ...resource}}
export const AWS_TRANSFER_CONNECTOR:RESOURCE<_AWS_TRANSFER_CONNECTOR> = (resource) => {return {Type: "AWS::Transfer::Connector", ...resource}}
export const AWS_TRANSFER_PROFILE:RESOURCE<_AWS_TRANSFER_PROFILE> = (resource) => {return {Type: "AWS::Transfer::Profile", ...resource}}
export const AWS_TRANSFER_SERVER:RESOURCE<_AWS_TRANSFER_SERVER> = (resource) => {return {Type: "AWS::Transfer::Server", ...resource}}
export const AWS_TRANSFER_USER:RESOURCE<_AWS_TRANSFER_USER> = (resource) => {return {Type: "AWS::Transfer::User", ...resource}}
export const AWS_TRANSFER_WORKFLOW:RESOURCE<_AWS_TRANSFER_WORKFLOW> = (resource) => {return {Type: "AWS::Transfer::Workflow", ...resource}}
export const AWS_VERIFIEDPERMISSIONS_IDENTITYSOURCE:RESOURCE<_AWS_VERIFIEDPERMISSIONS_IDENTITYSOURCE> = (resource) => {return {Type: "AWS::VerifiedPermissions::IdentitySource", ...resource}}
export const AWS_VERIFIEDPERMISSIONS_POLICY:RESOURCE<_AWS_VERIFIEDPERMISSIONS_POLICY> = (resource) => {return {Type: "AWS::VerifiedPermissions::Policy", ...resource}}
export const AWS_VERIFIEDPERMISSIONS_POLICYSTORE:RESOURCE<_AWS_VERIFIEDPERMISSIONS_POLICYSTORE> = (resource) => {return {Type: "AWS::VerifiedPermissions::PolicyStore", ...resource}}
export const AWS_VERIFIEDPERMISSIONS_POLICYTEMPLATE:RESOURCE<_AWS_VERIFIEDPERMISSIONS_POLICYTEMPLATE> = (resource) => {return {Type: "AWS::VerifiedPermissions::PolicyTemplate", ...resource}}
export const AWS_VOICEID_DOMAIN:RESOURCE<_AWS_VOICEID_DOMAIN> = (resource) => {return {Type: "AWS::VoiceID::Domain", ...resource}}
export const AWS_VPCLATTICE_ACCESSLOGSUBSCRIPTION:RESOURCE<_AWS_VPCLATTICE_ACCESSLOGSUBSCRIPTION> = (resource) => {return {Type: "AWS::VpcLattice::AccessLogSubscription", ...resource}}
export const AWS_VPCLATTICE_AUTHPOLICY:RESOURCE<_AWS_VPCLATTICE_AUTHPOLICY> = (resource) => {return {Type: "AWS::VpcLattice::AuthPolicy", ...resource}}
export const AWS_VPCLATTICE_LISTENER:RESOURCE<_AWS_VPCLATTICE_LISTENER> = (resource) => {return {Type: "AWS::VpcLattice::Listener", ...resource}}
export const AWS_VPCLATTICE_RESOURCEPOLICY:RESOURCE<_AWS_VPCLATTICE_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::VpcLattice::ResourcePolicy", ...resource}}
export const AWS_VPCLATTICE_RULE:RESOURCE<_AWS_VPCLATTICE_RULE> = (resource) => {return {Type: "AWS::VpcLattice::Rule", ...resource}}
export const AWS_VPCLATTICE_SERVICE:RESOURCE<_AWS_VPCLATTICE_SERVICE> = (resource) => {return {Type: "AWS::VpcLattice::Service", ...resource}}
export const AWS_VPCLATTICE_SERVICENETWORK:RESOURCE<_AWS_VPCLATTICE_SERVICENETWORK> = (resource) => {return {Type: "AWS::VpcLattice::ServiceNetwork", ...resource}}
export const AWS_VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION:RESOURCE<_AWS_VPCLATTICE_SERVICENETWORKSERVICEASSOCIATION> = (resource) => {return {Type: "AWS::VpcLattice::ServiceNetworkServiceAssociation", ...resource}}
export const AWS_VPCLATTICE_SERVICENETWORKVPCASSOCIATION:RESOURCE<_AWS_VPCLATTICE_SERVICENETWORKVPCASSOCIATION> = (resource) => {return {Type: "AWS::VpcLattice::ServiceNetworkVpcAssociation", ...resource}}
export const AWS_VPCLATTICE_TARGETGROUP:RESOURCE<_AWS_VPCLATTICE_TARGETGROUP> = (resource) => {return {Type: "AWS::VpcLattice::TargetGroup", ...resource}}
export const AWS_WAF_BYTEMATCHSET:RESOURCE<_AWS_WAF_BYTEMATCHSET> = (resource) => {return {Type: "AWS::WAF::ByteMatchSet", ...resource}}
export const AWS_WAF_IPSET:RESOURCE<_AWS_WAF_IPSET> = (resource) => {return {Type: "AWS::WAF::IPSet", ...resource}}
export const AWS_WAF_RULE:RESOURCE<_AWS_WAF_RULE> = (resource) => {return {Type: "AWS::WAF::Rule", ...resource}}
export const AWS_WAF_SIZECONSTRAINTSET:RESOURCE<_AWS_WAF_SIZECONSTRAINTSET> = (resource) => {return {Type: "AWS::WAF::SizeConstraintSet", ...resource}}
export const AWS_WAF_SQLINJECTIONMATCHSET:RESOURCE<_AWS_WAF_SQLINJECTIONMATCHSET> = (resource) => {return {Type: "AWS::WAF::SqlInjectionMatchSet", ...resource}}
export const AWS_WAF_WEBACL:RESOURCE<_AWS_WAF_WEBACL> = (resource) => {return {Type: "AWS::WAF::WebACL", ...resource}}
export const AWS_WAF_XSSMATCHSET:RESOURCE<_AWS_WAF_XSSMATCHSET> = (resource) => {return {Type: "AWS::WAF::XssMatchSet", ...resource}}
export const AWS_WAFREGIONAL_BYTEMATCHSET:RESOURCE<_AWS_WAFREGIONAL_BYTEMATCHSET> = (resource) => {return {Type: "AWS::WAFRegional::ByteMatchSet", ...resource}}
export const AWS_WAFREGIONAL_GEOMATCHSET:RESOURCE<_AWS_WAFREGIONAL_GEOMATCHSET> = (resource) => {return {Type: "AWS::WAFRegional::GeoMatchSet", ...resource}}
export const AWS_WAFREGIONAL_IPSET:RESOURCE<_AWS_WAFREGIONAL_IPSET> = (resource) => {return {Type: "AWS::WAFRegional::IPSet", ...resource}}
export const AWS_WAFREGIONAL_RATEBASEDRULE:RESOURCE<_AWS_WAFREGIONAL_RATEBASEDRULE> = (resource) => {return {Type: "AWS::WAFRegional::RateBasedRule", ...resource}}
export const AWS_WAFREGIONAL_REGEXPATTERNSET:RESOURCE<_AWS_WAFREGIONAL_REGEXPATTERNSET> = (resource) => {return {Type: "AWS::WAFRegional::RegexPatternSet", ...resource}}
export const AWS_WAFREGIONAL_RULE:RESOURCE<_AWS_WAFREGIONAL_RULE> = (resource) => {return {Type: "AWS::WAFRegional::Rule", ...resource}}
export const AWS_WAFREGIONAL_SIZECONSTRAINTSET:RESOURCE<_AWS_WAFREGIONAL_SIZECONSTRAINTSET> = (resource) => {return {Type: "AWS::WAFRegional::SizeConstraintSet", ...resource}}
export const AWS_WAFREGIONAL_SQLINJECTIONMATCHSET:RESOURCE<_AWS_WAFREGIONAL_SQLINJECTIONMATCHSET> = (resource) => {return {Type: "AWS::WAFRegional::SqlInjectionMatchSet", ...resource}}
export const AWS_WAFREGIONAL_WEBACL:RESOURCE<_AWS_WAFREGIONAL_WEBACL> = (resource) => {return {Type: "AWS::WAFRegional::WebACL", ...resource}}
export const AWS_WAFREGIONAL_WEBACLASSOCIATION:RESOURCE<_AWS_WAFREGIONAL_WEBACLASSOCIATION> = (resource) => {return {Type: "AWS::WAFRegional::WebACLAssociation", ...resource}}
export const AWS_WAFREGIONAL_XSSMATCHSET:RESOURCE<_AWS_WAFREGIONAL_XSSMATCHSET> = (resource) => {return {Type: "AWS::WAFRegional::XssMatchSet", ...resource}}
export const AWS_WAFV2_IPSET:RESOURCE<_AWS_WAFV2_IPSET> = (resource) => {return {Type: "AWS::WAFv2::IPSet", ...resource}}
export const AWS_WAFV2_LOGGINGCONFIGURATION:RESOURCE<_AWS_WAFV2_LOGGINGCONFIGURATION> = (resource) => {return {Type: "AWS::WAFv2::LoggingConfiguration", ...resource}}
export const AWS_WAFV2_REGEXPATTERNSET:RESOURCE<_AWS_WAFV2_REGEXPATTERNSET> = (resource) => {return {Type: "AWS::WAFv2::RegexPatternSet", ...resource}}
export const AWS_WAFV2_RULEGROUP:RESOURCE<_AWS_WAFV2_RULEGROUP> = (resource) => {return {Type: "AWS::WAFv2::RuleGroup", ...resource}}
export const AWS_WAFV2_WEBACL:RESOURCE<_AWS_WAFV2_WEBACL> = (resource) => {return {Type: "AWS::WAFv2::WebACL", ...resource}}
export const AWS_WAFV2_WEBACLASSOCIATION:RESOURCE<_AWS_WAFV2_WEBACLASSOCIATION> = (resource) => {return {Type: "AWS::WAFv2::WebACLAssociation", ...resource}}
export const AWS_WISDOM_ASSISTANT:RESOURCE<_AWS_WISDOM_ASSISTANT> = (resource) => {return {Type: "AWS::Wisdom::Assistant", ...resource}}
export const AWS_WISDOM_ASSISTANTASSOCIATION:RESOURCE<_AWS_WISDOM_ASSISTANTASSOCIATION> = (resource) => {return {Type: "AWS::Wisdom::AssistantAssociation", ...resource}}
export const AWS_WISDOM_KNOWLEDGEBASE:RESOURCE<_AWS_WISDOM_KNOWLEDGEBASE> = (resource) => {return {Type: "AWS::Wisdom::KnowledgeBase", ...resource}}
export const AWS_WORKSPACES_CONNECTIONALIAS:RESOURCE<_AWS_WORKSPACES_CONNECTIONALIAS> = (resource) => {return {Type: "AWS::WorkSpaces::ConnectionAlias", ...resource}}
export const AWS_WORKSPACES_WORKSPACE:RESOURCE<_AWS_WORKSPACES_WORKSPACE> = (resource) => {return {Type: "AWS::WorkSpaces::Workspace", ...resource}}
export const AWS_WORKSPACES_WORKSPACESPOOL:RESOURCE<_AWS_WORKSPACES_WORKSPACESPOOL> = (resource) => {return {Type: "AWS::WorkSpaces::WorkspacesPool", ...resource}}
export const AWS_WORKSPACESTHINCLIENT_ENVIRONMENT:RESOURCE<_AWS_WORKSPACESTHINCLIENT_ENVIRONMENT> = (resource) => {return {Type: "AWS::WorkSpacesThinClient::Environment", ...resource}}
export const AWS_WORKSPACESWEB_BROWSERSETTINGS:RESOURCE<_AWS_WORKSPACESWEB_BROWSERSETTINGS> = (resource) => {return {Type: "AWS::WorkSpacesWeb::BrowserSettings", ...resource}}
export const AWS_WORKSPACESWEB_IDENTITYPROVIDER:RESOURCE<_AWS_WORKSPACESWEB_IDENTITYPROVIDER> = (resource) => {return {Type: "AWS::WorkSpacesWeb::IdentityProvider", ...resource}}
export const AWS_WORKSPACESWEB_IPACCESSSETTINGS:RESOURCE<_AWS_WORKSPACESWEB_IPACCESSSETTINGS> = (resource) => {return {Type: "AWS::WorkSpacesWeb::IpAccessSettings", ...resource}}
export const AWS_WORKSPACESWEB_NETWORKSETTINGS:RESOURCE<_AWS_WORKSPACESWEB_NETWORKSETTINGS> = (resource) => {return {Type: "AWS::WorkSpacesWeb::NetworkSettings", ...resource}}
export const AWS_WORKSPACESWEB_PORTAL:RESOURCE<_AWS_WORKSPACESWEB_PORTAL> = (resource) => {return {Type: "AWS::WorkSpacesWeb::Portal", ...resource}}
export const AWS_WORKSPACESWEB_TRUSTSTORE:RESOURCE<_AWS_WORKSPACESWEB_TRUSTSTORE> = (resource) => {return {Type: "AWS::WorkSpacesWeb::TrustStore", ...resource}}
export const AWS_WORKSPACESWEB_USERACCESSLOGGINGSETTINGS:RESOURCE<_AWS_WORKSPACESWEB_USERACCESSLOGGINGSETTINGS> = (resource) => {return {Type: "AWS::WorkSpacesWeb::UserAccessLoggingSettings", ...resource}}
export const AWS_WORKSPACESWEB_USERSETTINGS:RESOURCE<_AWS_WORKSPACESWEB_USERSETTINGS> = (resource) => {return {Type: "AWS::WorkSpacesWeb::UserSettings", ...resource}}
export const AWS_XRAY_GROUP:RESOURCE<_AWS_XRAY_GROUP> = (resource) => {return {Type: "AWS::XRay::Group", ...resource}}
export const AWS_XRAY_RESOURCEPOLICY:RESOURCE<_AWS_XRAY_RESOURCEPOLICY> = (resource) => {return {Type: "AWS::XRay::ResourcePolicy", ...resource}}
export const AWS_XRAY_SAMPLINGRULE:RESOURCE<_AWS_XRAY_SAMPLINGRULE> = (resource) => {return {Type: "AWS::XRay::SamplingRule", ...resource}}
