/**
 * HTTP Status Codes
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export const HTTP_STATUS_CODE = {
    // 1xx Informational

    /**
     * The server has received the request headers and the client should proceed to send the request body.
     */
    Continue: 100,

    /**
     * The requester has asked the server to switch protocols and the server has agreed to do so.
     */
    SwitchingProtocols: 101,

    /**
     * The server has received and is processing the request, but no response is available yet.
     */
    Processing: 102,

    /**
     * Used to return some response headers before final HTTP message.
     */
    EarlyHints: 103,

    // 2xx Success

    /**
     * The request succeeded. The meaning of the success depends on the HTTP method.
     */
    Ok: 200,

    /**
     * The request succeeded, and a new resource was created as a result.
     */
    Created: 201,

    /**
     * The request has been received but not yet acted upon. It is noncommittal.
     */
    Accepted: 202,

    /**
     * The returned metadata is not exactly the same as available from the origin server.
     */
    NonAuthoritativeInformation: 203,

    /**
     * There is no content to send for this request, but the headers may be useful.
     */
    NoContent: 204,

    /**
     * Tells the user agent to reset the document which sent this request.
     */
    ResetContent: 205,

    /**
     * Used when the Range header is sent from the client to request only part of a resource.
     */
    PartialContent: 206,

    /**
     * Conveys information about multiple resources, for situations where multiple status codes might be appropriate.
     */
    MultiStatus: 207,

    /**
     * Used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings.
     */
    AlreadyReported: 208,

    /**
     * The server has fulfilled a GET request for the resource, and the response represents the result of instance-manipulations.
     */
    ImUsed: 226,

    // 3xx Redirection

    /**
     * The request has more than one possible response. The user agent should choose one of them.
     */
    MultipleChoices: 300,

    /**
     * The URL of the requested resource has been changed permanently. The new URL is given in the response.
     */
    MovedPermanently: 301,

    /**
     * The URI of the requested resource has been changed temporarily. Further changes may be made in the future.
     */
    Found: 302,

    /**
     * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
     */
    SeeOther: 303,

    /**
     * Used for caching purposes. It tells the client that the response has not been modified.
     */
    NotModified: 304,

    /**
     * The requested resource is available only through a proxy, the address for which is provided in the response.
     * @deprecated Due to security concerns regarding in-band configuration of a proxy.
     */
    UseProxy: 305,

    /**
     * The server sends this response to direct the client to get the requested resource at another URI with the same method.
     */
    TemporaryRedirect: 307,

    /**
     * The resource is now permanently located at another URI, specified in the Location header.
     */
    PermanentRedirect: 308,

    // 4xx Client Errors

    /**
     * The server cannot or will not process the request due to something perceived as a client error.
     */
    BadRequest: 400,

    /**
     * The client must authenticate itself to get the requested response.
     */
    Unauthorized: 401,

    /**
     * Reserved for future use. Initially intended for digital payment systems.
     */
    PaymentRequired: 402,

    /**
     * The client does not have access rights to the content; the server is refusing to give the requested resource.
     */
    Forbidden: 403,

    /**
     * The server cannot find the requested resource. The URL is not recognized.
     */
    NotFound: 404,

    /**
     * The request method is known by the server but is not supported by the target resource.
     */
    MethodNotAllowed: 405,

    /**
     * The server cannot produce a response matching the list of acceptable values defined in the request's headers.
     */
    NotAcceptable: 406,

    /**
     * Similar to 401 Unauthorized but authentication is needed to be done by a proxy.
     */
    ProxyAuthenticationRequired: 407,

    /**
     * The server would like to shut down this unused connection.
     */
    RequestTimeout: 408,

    /**
     * The request conflicts with the current state of the server.
     */
    Conflict: 409,

    /**
     * The requested content has been permanently deleted from the server, with no forwarding address.
     */
    Gone: 410,

    /**
     * The server rejected the request because the Content-Length header field is not defined.
     */
    LengthRequired: 411,

    /**
     * The client has indicated preconditions in its headers which the server does not meet.
     */
    PreconditionFailed: 412,

    /**
     * The request entity is larger than limits defined by the server.
     */
    PayloadTooLarge: 413,

    /**
     * The URI requested by the client is longer than the server is willing to interpret.
     */
    UriTooLong: 414,

    /**
     * The media format of the requested data is not supported by the server.
     */
    UnsupportedMediaType: 415,

    /**
     * The range specified by the Range header field in the request cannot be fulfilled.
     */
    RangeNotSatisfiable: 416,

    /**
     * The expectation indicated by the Expect request header field cannot be met by the server.
     */
    ExpectationFailed: 417,

    /**
     * The server refuses the attempt to brew coffee with a teapot.
     */
    ImATeapot: 418,

    /**
     * The request was directed at a server that is not able to produce a response.
     */
    MisdirectedRequest: 421,

    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    UnprocessableEntity: 422,

    /**
     * The resource that is being accessed is locked.
     */
    Locked: 423,

    /**
     * The request failed due to failure of a previous request.
     */
    FailedDependency: 424,

    /**
     * Indicates that the server is unwilling to risk processing a request that might be replayed.
     */
    TooEarly: 425,

    /**
     * The server refuses to perform the request using the current protocol.
     */
    UpgradeRequired: 426,

    /**
     * The origin server requires the request to be conditional.
     */
    PreconditionRequired: 428,

    /**
     * The user has sent too many requests in a given amount of time (rate limiting).
     */
    TooManyRequests: 429,

    /**
     * The server is unwilling to process the request because its header fields are too large.
     */
    RequestHeaderFieldsTooLarge: 431,

    /**
     * The user agent requested a resource that cannot legally be provided.
     */
    UnavailableForLegalReasons: 451,

    // 5xx Server Errors

    /**
     * The server has encountered a situation it does not know how to handle.
     */
    InternalServerError: 500,

    /**
     * The request method is not supported by the server and cannot be handled.
     */
    NotImplemented: 501,

    /**
     * The server, while acting as a gateway, received an invalid response from the upstream server.
     */
    BadGateway: 502,

    /**
     * The server is not ready to handle the request, commonly due to maintenance or overload.
     */
    ServiceUnavailable: 503,

    /**
     * The server is acting as a gateway and cannot get a response in time from the upstream server.
     */
    GatewayTimeout: 504,

    /**
     * The HTTP version used in the request is not supported by the server.
     */
    HttpVersionNotSupported: 505,

    /**
     * The server has an internal configuration error: the chosen variant resource is configured to engage in content negotiation.
     */
    VariantAlsoNegotiates: 506,

    /**
     * The server is unable to store the representation needed to complete the request.
     */
    InsufficientStorage: 507,

    /**
     * The server detected an infinite loop while processing the request.
     */
    LoopDetected: 508,

    /**
     * Further extensions to the request are required for the server to fulfill it.
     */
    NotExtended: 510,

    /**
     * The client needs to authenticate to gain network access.
     */
    NetworkAuthenticationRequired: 511,
} as const;

export type HttpStatus =
    (typeof HTTP_STATUS_CODE)[keyof typeof HTTP_STATUS_CODE];
