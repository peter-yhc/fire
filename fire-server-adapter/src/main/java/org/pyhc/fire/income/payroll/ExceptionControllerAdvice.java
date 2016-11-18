package org.pyhc.fire.income.payroll;

import org.pyhc.fire.income.MonthlyIncomeNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.logging.Level;
import java.util.logging.Logger;

@ControllerAdvice
public class ExceptionControllerAdvice {

    private static final Logger LOG = Logger.getLogger("ExceptionControllerAdvice");

    @ExceptionHandler(MonthlyIncomeNotFoundException.class)
    public ResponseEntity<Void> handleMonthlyIncomeNotFoundException(MonthlyIncomeNotFoundException exception) {
        LOG.log(Level.WARNING, exception.getMessage(), exception);
        return ResponseEntity.notFound().build();
    }

}
