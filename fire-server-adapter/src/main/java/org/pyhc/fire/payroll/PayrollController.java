package org.pyhc.fire.payroll;

import com.google.gson.Gson;
import org.pyhc.fire.model.IdentityResponse;
import org.pyhc.fire.service.DatabaseIdentityObfuscatorPort;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8;

@RestController
@RequestMapping(value = "/api/payrolls")
public class PayrollController {

    @Autowired
    private Gson gson;

    @Autowired
    private DatabaseIdentityObfuscatorPort databaseIdentityObfuscatorPort;

    @Autowired
    private PayrollServicePort payrollServicePort;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getPayrolls(@RequestParam(name = "payPeriod", required = false) String payPeriod) throws PayrollNotFoundException {
        List<PayrollEntry> payrolls;
        if (null != payPeriod) {
            payrolls = payrollServicePort.findPayrollsByPeriod(payPeriod);
        } else {
            payrolls = payrollServicePort.findPayrolls();
        }
        databaseIdentityObfuscatorPort.hideId(payrolls);
        return ResponseEntity.ok().contentType(APPLICATION_JSON_UTF8).body(gson.toJson(payrolls));
    }

    @RequestMapping(method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity addNewPayroll(@RequestBody PayrollEntry payrollEntry) {
        String id = payrollServicePort.addPayroll(payrollEntry);
        return ResponseEntity.accepted().body(new IdentityResponse(id));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PATCH, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity updatePayroll(@PathVariable("id") String id, @RequestBody PayrollEntry payrollEntry) {
        try {
            payrollEntry = payrollServicePort.updatePayroll(id, payrollEntry);
        } catch (PayrollNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok().contentType(APPLICATION_JSON_UTF8).body(gson.toJson(payrollEntry));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deletePayroll(@PathVariable("id") String id) {
        payrollServicePort.delete(id);
        return ResponseEntity.ok().build();
    }
}
