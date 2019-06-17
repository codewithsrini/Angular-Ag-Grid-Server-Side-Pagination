import { environment } from '../../environments/environment';

export const apiRoutes = {
    Dashboard: {
        GET_LATEST_INFO: `${environment.serviceUrl}/GetLatestInfo`
    }
}