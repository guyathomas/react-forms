import { Meta } from '@guyathomas/data-driven-forms-react-form-renderer';

export type validationError = (meta: Meta<any>, validateOnMount?: boolean) => boolean | any | undefined;

export default validationError;
