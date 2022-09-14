import { hasKey } from '@nx-console/shared/utils';
import { JSONSchema } from 'vscode-json-languageservice';

export const X_COMPLETION_TYPE = 'x-completion-type' as const;
export const X_COMPLETION_GLOB = 'x-completion-glob' as const;

export type CompletionType =
  | 'file'
  | 'directory'
  | 'projectTarget'
  | 'project'
  | 'targets'
  | 'tags';

export function hasCompletionType(
  schema: JSONSchema
): schema is JSONSchema & { [X_COMPLETION_TYPE]: CompletionType } {
  return hasKey(schema, X_COMPLETION_TYPE);
}

export function hasCompletionGlob(
  schema: JSONSchema
): schema is JSONSchema & { [X_COMPLETION_GLOB]: string } {
  return hasKey(schema, X_COMPLETION_GLOB);
}

declare module 'vscode-json-languageservice' {
  interface JSONSchema {
    [X_COMPLETION_TYPE]?: CompletionType;
    [X_COMPLETION_GLOB]?: string;
  }
}

export type EnhancedJsonSchema = JSONSchema;