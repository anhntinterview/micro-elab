import { API_PORT, DOMAIN, PROTOCAL } from '@app/app/template/envVars';
import { isObjectEmpty } from '@app/app/core/util';

export enum API_METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type BodyDataType = {
  bodyData: Record<string, any>
}

export interface IApiOptions extends RequestInit {}
/*
export type ApiOptionsType = {
  method: API_METHOD;
  headers: Record<string, unknown>;
  mode: string | 'cors'; // cors", "no-cors", "same-origin", "navigate"
  cache?: string | 'default'; // "default", "no-store", "reload", "no-cache", "force-cache"
  credentials?: string | 'same-origin'; //  "same-origin", "include", "omit"
  redirect?: string | 'follow'; // "follow", "error", "manual".
  referrer?: string | 'origin'; //  "no-referrer", "no-referrer-when-downgrade", "origin", "strict-origin"
  integrity: string;
  signal: AbortSignal; // Hủy yêu cầu khi cần thiết
  // POST METHOD
  keepalive?: boolean | false,
  allowForbiddenHeaders?: [] | string
  referrerPolicy?: string,
  body?: Record<string, unknown>
} | {};
*/

export type ApiHeadersType =
  | {
      Accept: string | '*';
      'Content-Type': string | 'application/json';
      Authorization?: string;
      'User-Agent'?: string;
      Cookie?: string;
      Host?: string;
      Referer?: string;
      ETag?: string;
      'Cache-Control'?: string;
      'Content-Length'?: string;
      'If-None-Match'?: string;
      'If-Modified-Since'?: string;
    }
  | {};

abstract class BaseApiService<ResponseType> {
  protected response: ResponseType | undefined;
  private domain: string = DOMAIN;
  private port: number = API_PORT;
  private protocal: string = PROTOCAL;
  private _endpoint: string = 'api';
  private _headers: ApiHeadersType = {
    'Content-Type': 'application/json',
  };
  private _body!: BodyInit;
  private _param: Record<string, unknown> = {};
  protected _options: IApiOptions = {};

  public set endpoint(v: string) {
    this._endpoint = `api${v}`;
  }

  public get endpoint(): string {
    return this._endpoint;
  }

  public set headers(v: ApiHeadersType) {
    this._headers = v;
  }

  public get headers(): ApiHeadersType {
    return this._headers;
  }

  public set body(v: BodyInit) {
    this._body = v;
  }

  public get body(): BodyInit {
    return this._body;
  }

  public set param(v: Record<string, unknown>) {
    this._param = v;
  }

  public get param(): Record<string, unknown> {
    return this._param;
  }

  public set options(v: IApiOptions) {
    this._options = v;
  }

  public get options(): IApiOptions {
    return this._options;
  }

  url() {
    if (isObjectEmpty(this.param)) {
      return `${this.protocal}${this.domain}:${this.port}/${this.endpoint}`;
    } else {
      const pathParts = [];
      for (const key in this.param) {
        if (this.param.hasOwnProperty(key)) {
          const value = this.param[key];
          const pathPart = `${key}=${value}`;
          pathParts.push(pathPart);
        }
      }
      const params = pathParts.join('&');
      return `${this.protocal}${this.domain}:${this.port}/${this.endpoint}?${params}`;
    }
  }

  constructor() {
    this.options.mode = 'cors'
  }
}

export default BaseApiService;
