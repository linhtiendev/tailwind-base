export interface BaseRequestHistoryWallet {
  TransactionType: string
  PageSize: number
  PageNumber: number
}

export interface WalletHistoryQueryRequest extends BaseRequestHistoryWallet {
  FromDate: string
  ToDate: string
}

export interface ListTotalDataPoint {
  TotalScoreAll: number
  TotalScoreMonth: number
  TotalScoreQuarter: number
  TotalScoreYear: number
}

export interface WalletHistoryQueryScoreRequest {
  Month: number
  Quarter: number
  Year: number
  TransactionType: string
}

export interface WalletHistoryDriverIdRequest extends BaseRequestHistoryWallet {
  id: number
}

export interface RankingRequest {
  Month: number
  Year: number
  Search: string
  PageSize: number
  PageNumber: number
}
