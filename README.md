## 🚀 Quick start

1.  **Start developing.**

    Using Node 18+ only.

    Navigate into your new site’s directory and start it up.

    ```shell
    npm install
    gatsby develop
    ```
2.  **Using Gatsby support Contact email handling.**

    
    Using  GetForm to receive contact requests ([instructions here](https://www.gatsbyjs.com/docs/building-a-contact-form/))
    Using Google Recapcha v2 for spam prevention.

2.  **Build and Host on AWS Amplify**

    Error: 
    At the moment, Amazon Linux 2 image does not work properly with node 18+. While waiting for Amazon Linux 2023 to be available for Amplify,
    We need to temporarily using a custom docker image: ([public.ecr.aws/docker/library/node:18.13.0](https://github.com/aws-amplify/amplify-hosting/issues/3109))

    If no hosted domain name is in used, We need to adjust "Rewrite and Redirect" rule to allow 404 (Rewrite) on all asset extensions the website needs:
    ```
    </^[^.]+$|.(?!(css|webp|gif|ico|jpg|jpeg|js|png|txt|svg|woff|ttf|map|json)$)([^.]+$)/>
    ```