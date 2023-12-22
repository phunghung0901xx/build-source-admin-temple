import { MutationFunction, UseMutationOptions, UseMutationResult, useMutation } from '@tanstack/react-query'

const useSyncMutation = <TData = unknown, TError = unknown, TVariables = void, TContext = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
  options?: Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationKey'>,
): UseMutationResult<TData, TError, TVariables, TContext> => {
  const mutationResults = useMutation(mutationFn, options)

  return {
    ...mutationResults,
    mutate: (...params: [TVariables]) => {
      if (!mutationResults.isLoading) {
        mutationResults.mutate(...params)
      }
    },
  }
}

export default useSyncMutation
