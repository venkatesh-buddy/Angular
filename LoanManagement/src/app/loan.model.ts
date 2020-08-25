export interface LoanType {
    loanTypeDesc: string;
    percentage: any;
}

export interface Lender {
    lenderName: string;
    lenderAddress: string;
}

export interface Borrower {
    borrowerName: string;
    borrowerAddress: string;
}

export interface Repayment {
    paidAmount: number;
    numberOfInstallments: number;
    lastInstallmentDate: Date;
    nextDueDate: Date;
    remainingPrincipleAmount: number;
    paidStatus: string;
}

export interface LoanModel {
    loanId: number;
    loanType: LoanType;
    loanAmount: number;
    lender: Lender;
    borrower: Borrower;
    repayment: Repayment;
}



