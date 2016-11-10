package org.pyhc.fire.payroll;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.logging.Level;
import java.util.logging.Logger;

@ControllerAdvice
public class ExceptionControllerAdvice {

    private static final Logger LOG = Logger.getLogger("ExceptionControllerAdvice");

    @ExceptionHandler(PayrollNotFoundException.class)
    public ResponseEntity<Void> handlePayrollNotFoundException(PayrollNotFoundException exception) {
        LOG.log(Level.WARNING, exception.getMessage(), exception);
        return ResponseEntity.notFound().build();
    }

}
