import { OnTransactionHandler, OnCronjobHandler } from '@metamask/snaps-types';
import { heading, panel, text } from '@metamask/snaps-ui';

export const onTransaction: OnTransactionHandler = async ({ transaction }) => {
  console.log('onTransaction', transaction);
  
  const policy = {premium: "1", expirationDate: "2024-09-23"}

  // Display percentage of gas fees in the transaction insights UI.
  return {
    content: panel([
      heading('Insurance Policy Details'),
      text(
        `Below are details of the insurance policy you are purchasing. 
        Please review the details and click "Confirm" to purchase the policy.`,
      ),
      text(
        `Premium: ${policy.premium}ETH`,
      ),
      text(
        `Expires: ${policy.expirationDate}`,
      ),       
    ]),
  };
};

export const onCronjob: OnCronjobHandler = async ({ request }) => {
  console.log('onCronjob', request);
  switch (request.method) {
    case 'updateInsurancePolicy':
      const message =
        'It is time to update your insurance policy.';

      return snap.request({
        method: 'snap_notify',
        params: {
          type: 'inApp',
          message: message,
        },
      });

    default:
      throw new Error('Method not found.');
  }
};