# Fetch
This uses the JS fetch API (see below) to get data.
This also filters the data dynamically as user enters data in the input.

## Fetch API
The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a promise that resolves to the Response to that request, whether it is successful or not. You can also optionally pass in an init options object as the second argument.

Once a Response is retrieved, there are a number of methods available to define what the body content is and how it should be handled (see Body)
