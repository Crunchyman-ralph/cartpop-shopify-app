import apiSession from "../../middleware/api-session.js";
import verifyRequest from "../../middleware/verify-request.js";
import Billing from "./helpers/index.js";

const apiRoutePrefix = `/api/billing`;

export default function apiBilling(app) {
  /*
        POST api/billing
        
        > Create a subscription plan charge
    */
  app.post(
    `${apiRoutePrefix}`,
    verifyRequest(app),
    apiSession(app),
    async (req, res) => {
      try {
        const newSubscriptionUrl = await Billing.upgrade(req, res);
        res.status(200).send({
          url: newSubscriptionUrl,
        });
      } catch (error) {
        console.log(`Failed to process api request: ${error}`);
        res.status(500).send(error.message);
      }
    }
  );

  /*
        GET api/billing/confirm
        
        > Save subscription to shopDoc
    */
  app.get(`${apiRoutePrefix}/confirm`, async (req, res) => {
    try {
      const { success, shop } = await Billing.confirm(req, res);
      res.redirect(
        `https://${shop}/admin/apps/${process.env.APP_SLUG}/settings/billing?upgraded=${success}`
      );
    } catch (error) {
      console.log(`Failed to process api request: ${error}`);
      res.status(500).send(error.message);
    }
  });

  /*
        DELETE api/billing
        
        > Deletes a subscription plan charge. Downgrades to Free.
    */
  app.delete(
    `${apiRoutePrefix}`,
    verifyRequest(app),
    apiSession(app),
    async (req, res) => {
      try {
        const { success } = await Billing.downgrade(req, res);
        res.status(200).send({
          success: success,
        });
      } catch (error) {
        console.log(`Failed to process api request: ${error}`);
        res.status(500).send(error.message);
      }
    }
  );
}
