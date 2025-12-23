import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import CAMPAIGN_OVERRIDES from '@salesforce/resourceUrl/campaignMessagesStyleOverride';
export default class CampaignMessagesStyling extends LightningElement {
  connectedCallback() {
    loadStyle(this, CAMPAIGN_OVERRIDES);
  }
}
