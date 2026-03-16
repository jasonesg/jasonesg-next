# ConvertKit Newsletter Setup

This document explains how to set up the ConvertKit newsletter integration for your blog.

## Configuration Steps

1. **Create a `.env.local` file** in your project root with the following variables:

```
# ConvertKit API credentials
CONVERTKIT_API_KEY=your_api_key_here
CONVERTKIT_FORM_ID=your_form_id_here
```

2. **Get your ConvertKit API credentials**:
   - **API Key**: Log in to ConvertKit → Account Settings → API Key
   - **Form ID**: Forms → Select your form → Settings → The Form ID is shown in the URL or in the form settings

3. **Restart your development server** after adding the environment variables.

## How It Works

The newsletter signup flow works as follows:

1. The `NewsletterSignup` component is displayed at the bottom of each blog post.
2. When a user submits their email, the form sends a request to your `/api/subscribe` endpoint.
3. The API route securely communicates with ConvertKit's API to add the subscriber.
4. ConvertKit handles the confirmation email and subscriber management.

## Customization Options

The `NewsletterSignup` component accepts the following props:

- `location`: Helps track where subscribers are coming from (defaults to "blog")

Example usage:

```jsx
<NewsletterSignup location="featured-post" />
```

## Testing

To test the integration:

1. Fill out the form with a test email address
2. Check your ConvertKit dashboard to confirm the subscriber was added
3. Verify that the confirmation email was sent

## Troubleshooting

If subscribers aren't being added:

1. Check the browser console for errors
2. Verify your API credentials are correct
3. Ensure your ConvertKit form is active
4. Check server logs for any API errors

## Additional Resources

- [ConvertKit API Documentation](https://developers.convertkit.com/)
- [Next.js API Routes Documentation](https://nextjs.org/docs/api-routes/introduction)