import { useEffect } from "react";
import {
  RoutePropagator as AppBridgeRoutePropagator,
  useAppBridge,
} from "@shopify/app-bridge-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ContextualSaveBar, Redirect } from "@shopify/app-bridge/actions";

const RoutePropagator = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const app = useAppBridge();

  useEffect(() => {
    app.subscribe(Redirect.Action.APP, (payload) => {
      navigate(payload.path);
    });
  }, [app]);

  useEffect(() => {
    const contextualSaveBar = ContextualSaveBar.create(app);
    contextualSaveBar.dispatch(ContextualSaveBar.Action.HIDE);
  }, [location]);

  return <AppBridgeRoutePropagator location={location} />;
};
export default RoutePropagator;
