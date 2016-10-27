package org.pyhc.fire.payroll;

import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/payrolls")
public class PayrollController {

    @Autowired
    private Gson gson;

    @Autowired
    private PayrollServicePort payrollServicePort;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity getPayrolls() {
        List<PayrollEntry> payrolls = payrollServicePort.findPayrolls();
        return ResponseEntity.ok().body(gson.toJson(payrolls));
    }

}
