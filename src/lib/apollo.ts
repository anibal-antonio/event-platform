import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-us-west-2.graphcms.com/v2/cl4o5e2bm0lyx01xihu8qbra5/master',
    cache:new InMemoryCache()
});